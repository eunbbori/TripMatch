import bcrypt from "bcrypt";
import "dotenv/config";
import { User } from "../interfaces";

class HashPassword {
  private salt = Number(process.env.BCRYPT_SALT);

  async hash(userInfo: User) {
    userInfo.password = await bcrypt.hash(
      userInfo.password as string,
      this.salt
    );
    return userInfo;
  }
  async compare(password: string, hashed: string) {
    const result = await bcrypt.compare(password, hashed);
    return result;
  }
}

const hashPassword = new HashPassword();

export default hashPassword;
