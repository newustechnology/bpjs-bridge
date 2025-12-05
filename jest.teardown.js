import { redis } from "./src/lib/redis";

module.exports = async () => {
  if (redis && redis.quit) {
    await redis.quit();
  }
  if (redis && redis.disconnect) {
    await redis.disconnect();
  }
};
