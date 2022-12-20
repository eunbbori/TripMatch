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

class Redis {
  private redis = redisClient.v4;

  async set(key: string, value: string): Promise<void> {
    await this.redis.set(key, value);
  }
  async get(key: string): Promise<string> {
    const result = await this.redis.get(key);
    return result;
  }
  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}

const redis = new Redis();

export { redisClient, redis };
