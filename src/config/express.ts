import express from 'express';
import * as bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';
import CustomError from '../api/middlewares/error';
import vars from './vars';
import routes from '../api/routes/v1';



/**
 * Express instance
 * @public
 */
const app = express();

/**
 Parse incoming request bodies in a middleware before your handlers,
 available under the req.body property.
 */
app.use(bodyParser.json({limit: '100mb'})); // Controls the maximum request body size.
app.use(
    bodyParser.urlencoded({
        limit: '100mb',
        extended: true,
        parameterLimit: 100000
    })
);


/** compression is a middleware that support gzip and deflate * */
app.use(compress());

/** lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it * */
app.use(methodOverride());

/** secure apps by setting various HTTP headers  * */
app.use(helmet());

/** CORS - Cross Origin Resource Sharing
 * CORS providing a Connect/Express middleware that can be used to enable CORS with various options.
 * * */
app.use(cors());

/** mount api v1 routes * */
app.use(vars.basePath, routes);

/** if error is not an instanceOf APIError, convert it.  * */
app.use(CustomError.converter);

/** catch 404 and forward to error handler * */
app.use(CustomError.notFound);

export default app;
