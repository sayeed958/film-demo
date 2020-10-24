import httpStatus from 'http-status';
import * as express from 'express';
import constants from '../../../config/constants';
import customResponse from '../../utils/response';
import FilmService from '../../services/sql/film.service';

const {miscMessage, version} = constants;
/**
 * @class FilmController
 * @description create film, list film operation
 *
 * */
export default class FilmController {
    static async createFilm(req: express.Request, res: express.Response) {
        try {

            const reqBody = {...req.body};
            reqBody.photo = req.file.filename;
            const result = await FilmService.createFilm(reqBody);
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

    static async listFilm(req: express.Request, res: express.Response) {
        try {
            const reqBody = {...req.query};
            const result = await FilmService.listFilm(reqBody);
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

    static async getSingleFilm(req: express.Request, res: express.Response) {
        try {
            const reqBody = {
                uuid: req.params.uuid
            }
            const result = await FilmService.getFilmDetails(reqBody);
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

    static async createComment(req: express.Request, res: express.Response) {
        try {
            const reqBody = {
                userId: req['user']['id'],
                comment: req.body.comment,
                filmId: req.body.filmId
            };
            const result = await FilmService.createFilmComment(reqBody);
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
