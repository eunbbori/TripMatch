import { UserModel } from "../models";
import { User } from "../interfaces";
import { hashPassword, sendMail, redis } from "../utils";

class UserService {
  private userModel = new UserModel();

  private randomNumber(): string {
    const number = Math.floor(Math.random() * 1000000);
    if (number === 0) return this.randomNumber();
    return String(number).padStart(6, "0");
  }

  async checkEmail({ email }: Partial<User>): Promise<void> {
    const user = await this.userModel.findByEmail(email as string);
    if (user) throw new Error("409");
    const number = this.randomNumber();
    await redis.set(email as string, number);
    await sendMail(
      email as string,
      `다음 인증번호를 입력해주십시오. >> ${number}`
    );
  }
  async checkNumber({ email, number }: { email: string; number: number }) {
    const correct = await redis.get(email);
    if (number !== Number(correct)) throw new Error("400");
    await redis.set(email, "certified");
  }
  async join(userInfo: Partial<User>): Promise<void> {
    const result = await redis.get(userInfo.email as string);
    if (result !== "certified") throw new Error("403");
    await redis.del(userInfo.email as string);
    const hashedInfo = await hashPassword.hash(userInfo);
    const { email } = await this.userModel.create(hashedInfo);
    await sendMail(email as string, "???에 가입되었습니다.");
  }
}

const userService = new UserService();

export default userService;
