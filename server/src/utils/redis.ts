import { createClient } from "redis";
import "dotenv/config";

const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;
const redisUsername = process.env.REDIS_USERNAME;
const redisPassword = process.env.REDIS_PASSWORD;

const redisClient = createClient({
  url: `redis://${redisUsername}:${redisPassword}@${redisHost}:${redisPort}/0`,
  legacyMode: true,
});
redisClient.on("connect", () => console.log("redis connected"));
redisClient.on("end", () => console.log("redis disconnected"));
redisClient.on("error", (err) => console.log("Error[Redis]", err));

class Redis {
  private redis = redisClient.v4;

  async set(key: string, value: string) {
    await redisClient.connect();
    await this.redis.set(key, value);
    await redisClient.disconnect();
  }
  async get(key: string) {
    await redisClient.connect();
    const result = await this.redis.get(key);
    await redisClient.disconnect();
    return result;
  }
}

const redis = new Redis();

export default redis;
