import * as jwt from 'jsonwebtoken';
import * as httpStatus from 'http-status';
import customResponse from '../utils/response';
import constants from '../../config/constants';
import vars from '../../config/vars';


const {miscMessage, version} = constants;


const verifyToken = async (req, res, next) => {

    const token = req.body.accessToken
        || req.query.accessToken
        || req.headers['x-access-token'];

    const method = '[verifyToken]';

    jwt.verify(token, vars.jwtSecret, (err, decoded) => {
        if (err) {
            console.log(method, 'error', err);
            console.log(method, 'token', token);
            if (err.name === 'TokenExpiredError') {
                return customResponse.setResponse(
                    res,
                    false,
                    httpStatus.UNAUTHORIZED,
                    miscMessage.TOKEN_EXPIRED,
                    version.v1,
                    null
                );
            }
            return customResponse.setResponse(
                res,
                false,
                httpStatus.UNAUTHORIZED,
                miscMessage.INVALID_TOKEN,
                version.v1,
                null
            );
        }
        req.user = decoded;
        return next();
    });
    return null;
};

export default verifyToken;


