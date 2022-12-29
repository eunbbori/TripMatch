import bcrypt from "bcrypt";
import "dotenv/config";

class HashPassword {
  private salt = Number(process.env.BCRYPT_SALT);

  async hash(password: string) {
    const hashed = await bcrypt.hash(password, this.salt);
    return hashed;
  }
  async compare(password: string, hashed: string) {
    const result = await bcrypt.compare(password, hashed);
    return result;
  }
}

const hashPassword = new HashPassword();

export default hashPassword;
