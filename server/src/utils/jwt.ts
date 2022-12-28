import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";

class Jwt {
  private secretKey = process.env.JWT_KEY;

  create(payload: object, exp: string): Promise<string> {
    return new Promise((res, rej) => {
      jsonwebtoken.sign(
        payload,
        this.secretKey as string,
        {
          algorithm: "HS256",
          expiresIn: exp,
          issuer: "TripMatch",
        },
        (err, token) => {
          if (err) rej(err);
          else res(token as string);
        }
      );
    });
  }
  verify(token: string): Promise<jsonwebtoken.JwtPayload> {
    return new Promise((res, rej) => {
      jsonwebtoken.verify(token, this.secretKey as string, (err, decoded) => {
        if (err) rej(err);
        else res(decoded as jsonwebtoken.JwtPayload);
      });
    });
  }
  decode(token: string): jsonwebtoken.JwtPayload {
    const decoded = jsonwebtoken.decode(token);
    return decoded as jsonwebtoken.JwtPayload;
  }
}

const jwt = new Jwt();

export default jwt;
