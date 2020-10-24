import * as asyncRedis from 'async-redis';
import vars from '../../config/vars';

const { RedisHost, RedisPassword, RedisPort } = vars;
console.log(RedisHost);
const client = asyncRedis.createClient({
	host: RedisHost,
	port: RedisPort
});

client.auth(RedisPassword, (err, reply) => {
	console.log(reply);
});

client.on('error', (err) => {
	console.log('Something went wrong ', err);
});

client.on('ready', () => {
	console.log('Redis is ready');
});

client.on('error', (err) => {
	console.log('Something went wrong ', err);
});

export default class RedisCache {
	// constructor() {}

	static set(module: string, key: string, value: string) {
		try {
			if (typeof value !== 'string') {
				client.set(module + key, JSON.stringify(value));
			}
			else {
				client.set(module + key, value);
			}
			return true;
		}
		catch (error) {
			return false;
		}
	}

	static async get(module: string, key: string) {
		try {
			return await client.get(module + key);
		}
		catch (error) {
			return false;
		}
	}

	static async del(module: string, key: string) {
		try {
			return JSON.parse(await client.del(module + key));
		}
		catch (error) {
			return false;
		}
	}

	static async flushAll() {
		try {
			return JSON.parse(await client.flushdb());
		}
		catch (error) {
			return false;
		}
	}
    static getClient() {
        return client;
    }
}
