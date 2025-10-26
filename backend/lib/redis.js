import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Construct legacy-style URL using new token
const host = process.env.UPSTASH_REDIS_URL.replace("https://", "");
const redisUrl = `rediss://default:${process.env.UPSTASH_REDIS_TOKEN}@${host}`;

export const redis = new Redis(redisUrl);

await redis.set("foo", "bar");
