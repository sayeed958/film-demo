import * as path from 'path';
/**
 *  import .env variables
 */
import * as dotSafe from 'dotenv-safe';

dotSafe.config({
    allowEmptyValues: true,
    path: path.join(__dirname, '../../.env'),
    example: path.join(__dirname, '../../.env.example')
});
export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    stage: process.env.STAGE,
    basePath: `/api/v1`,
    postgre: {
        db: process.env.PGSQL_DB,
        host: process.env.PGSQL_HOST,
        port: +process.env.PGSQL_PORT,
        username: process.env.PGSQL_USER,
        password: process.env.PGSQL_PASS
    },
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
};
