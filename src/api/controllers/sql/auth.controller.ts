import httpStatus from 'http-status';
import * as express from 'express';
import constants from '../../../config/constants';
import customResponse from '../../utils/response';
import AuthService from '../../services/sql/auth.service';

const {miscMessage, version} = constants;

export default class AuthController {
    static async login(req: express.Request, res: express.Response) {
        try {
            const reqBody = {...req.body};
            const result = await AuthService.login(reqBody);
            if (result && result['error']) {
                return customResponse.setResponse(
                    res,
                    false,
                    httpStatus.BAD_REQUEST,
                    result['error'],
                    version.v1,
                    result
                );
            }
            return customResponse.setResponse(
                res,
                true,
                httpStatus.OK,
                'OK',
                version.v1,
                result
            );
        }
        catch (error) {
            console.log(error);
            return customResponse.setResponse(
                res,
                false,
                httpStatus.INTERNAL_SERVER_ERROR,
                miscMessage.FAILED,
                version.v1,
                error
            );
        }
    }

    static async register(req: express.Request, res: express.Response) {
        try {
            const reqBody = {...req.body};
            const result = await AuthService.register(reqBody);
            if (result && result['error']) {
                return customResponse.setResponse(
                    res,
                    false,
                    httpStatus.BAD_REQUEST,
                    result['error'],
                    version.v1,
                    result
                );
            }
            return customResponse.setResponse(
                res,
                true,
                httpStatus.OK,
                miscMessage.SUCCESS,
                version.v1,
                result
            );
        }
        catch (error) {
            console.log(error);
            return customResponse.setResponse(
                res,
                false,
                httpStatus.INTERNAL_SERVER_ERROR,
                miscMessage.FAILED,
                version.v1,
                error
            );
        }
    }
}
