import redis from 'redis';
import { promisify } from 'util';

const redisClient = redis.createClient();
const redisAsyncGet = promisify(redisClient.get).bind(redisClient);

export { redisClient, redisAsyncGet };
