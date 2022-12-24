import { UserModel } from "../models";
import { User } from "../interfaces";
import { hashPassword, sendMail, redis, jwt } from "../utils";
import { customAlphabet } from "nanoid";

class UserService {
  private userModel = new UserModel();

  async checkEmail(email: string) {
    const user = await this.userModel.findByEmail(email, { _id: 1 });
    if (user) throw new Error("409");
    const authNumber = customAlphabet("0123456789TripMatch", 6)();
    await redis.set(email, authNumber);
    await sendMail(email, `다음 인증번호를 입력해주십시오. >> ${authNumber}`);
  }
  async checkNumber(email: string, authNumber: string) {
    const correct = await redis.get(email);
    if (authNumber !== correct) throw new Error("400");
    await redis.set(email, "certified");
  }
  async join(body: User) {
    const result = await redis.get(body.email);
    if (result !== "certified") throw new Error("403");
    const hashedInfo = await hashPassword.hash(body);
    const user = await this.userModel.create(hashedInfo);
    await sendMail(user.email, "Trip Match에 가입되었습니다.");
  }
  async login(email: string, password: string) {
    const user = await this.userModel.findByEmail(email, {
      _id: 0,
      email: 1,
      password: 1,
      role: 1,
    });
    if (!user) throw new Error("400");
    const result = await hashPassword.compare(password, user.password);
    if (!result) throw new Error("400");
    const accessToken = await jwt.create(
      { email: user.email, role: user.role },
      "1h"
    );
    const refresh = await jwt.create({}, "7d");
    await redis.set(user.email, refresh);
    return {
      "x-access-token": `Bearer ${accessToken}`,
      refresh,
      email: user.email,
      role: user.role,
    };
  }
  async getAuthor(email: string) {
    const user = await this.userModel.findByEmail(email, {
      _id: 0,
      email: 1,
      nickname: 1,
      profileImg: 1,
    });
    return {
      email: user?.email,
      nickname: user?.nickname,
      profileImg: user?.profileImg,
    };
  }
  async getUser(email: string) {
    const user = await this.userModel.findByEmail(email, {
      _id: 0,
      email: 1,
      nickname: 1,
      gender: 1,
      age: 1,
      introduce: 1,
      profileImg: 1,
      matchCount: 1,
      matchPoint: 1,
    });
    if (!user) throw new Error("204");
    return user;
  }
  async delete(email: string) {
    await this.userModel.deleteOne(email);
  }
  async update(email: string, body: object) {
    await this.userModel.updateOne(email, body);
  }
  async refresh(accessToken: string, refresh: string) {
    await jwt.verify(refresh);
    const decoded = jwt.decode(accessToken);
    const correct = await redis.get(decoded.email);
    if (refresh !== correct) throw new Error("401");
    const newToken = await jwt.create(
      { email: decoded.email, role: decoded.role },
      "1h"
    );
    return { "x-access-token": `Bearer ${newToken}` };
  }
}

const userService = new UserService();

export default userService;
