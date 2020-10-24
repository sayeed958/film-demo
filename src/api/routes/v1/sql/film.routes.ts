import * as express from 'express';
import validate from 'express-validation';
import filmController from '../../../controllers/sql/film.controller';
import authValidation from '../../../validations/validation'

const router = express.Router();
const { createFilm} = authValidation;
/**
 * @api {post} /api/v1/film/create Create Film
 * @apiDescription Create Film
 * @apiVersion 1.0.0
 * @apiName createFilm
 * @apiGroup film
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 *
 * @apiParam  {String}             name                name (Required)
 * @apiParam  {String}             description            description(Required)
 * @apiParam  {String}             description            description(Required)
 * @apiParam  {Date}             releaseDate            releaseDate(Required)
 * @apiParam  {Number}             rating            rating(Required)
 * @apiParam  {Number}             ticketPrice            ticketPrice(Required)
 * @apiParam  {String}             country            country(Required)
 * @apiParam  {String}             photo            photo(Required)
 * @apiParam  {Array}             genre            genre(Required)
 *
 *
 * @apiSuccess (OK 200) {Number}     code         200=OK
 * @apiSuccess (OK 200) {Boolean}    status       true for success and false for failure
 * @apiSuccess (OK 200)  {String}    message      API Response message (Success)
 * @apiSuccess (OK 200) {Object[]}   result       result object
 * @apiSuccess (OK 200) {String}     appVersion   API version
 * @apiError (Bad Request 400)   {Boolean}    status    false
 * @apiError (Bad Request 400)   {String}     message   API Response message (username is required)
 * @apiError (Bad Request 400)   {Number}     code      400=Bad Request
 * @apiError (Bad Request 400)   {Object[]}   result    Blank Object
 * @apiError (Internal Server Error 500)   {Boolean}   status    false
 * @apiError (Internal Server Error 500)   {String}    message
 * API Response message (Internal Server Error)
 * @apiError (Internal Server Error 500)   {Number}    code      500=Internal Server Error
 * @apiError (Internal Server Error 500)   {Object[]}  result    Blank Object
 * @apiErrorExample {json} List error
 {
   "status": false,
   "code": 400,
   "message": "BAD_REQUEST"
   "appVersion": "v1.0.0",
   "result": {
    }
 }
 * @apiSuccessExample {json} Success-Response:
 {
    "status": true,
    "code": 200,
    "message": "SUCCESS",
    "appVersion": "v1.0.0",
    "result": {
    }
}
 */

router.route('/create').post(validate(createFilm), filmController.createFilm);

/**
 * @api {get} /api/v1/film/list List Film
 * @apiDescription List all films
 * @apiVersion 1.0.0
 * @apiName listFilm
 * @apiGroup film
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 *
 *
 *
 * @apiSuccess (OK 200) {Number}     code         200=OK
 * @apiSuccess (OK 200) {Boolean}    status       true for success and false for failure
 * @apiSuccess (OK 200)  {String}    message      API Response message (Success)
 * @apiSuccess (OK 200) {Object[]}   result       result object
 * @apiSuccess (OK 200) {String}     appVersion   API version
 * @apiError (Bad Request 400)   {Boolean}    status    false
 * @apiError (Bad Request 400)   {String}     message   API Response message (username is required)
 * @apiError (Bad Request 400)   {Number}     code      400=Bad Request
 * @apiError (Bad Request 400)   {Object[]}   result    Blank Object
 * @apiError (Internal Server Error 500)   {Boolean}   status    false
 * @apiError (Internal Server Error 500)   {String}    message
 * API Response message (Internal Server Error)
 * @apiError (Internal Server Error 500)   {Number}    code      500=Internal Server Error
 * @apiError (Internal Server Error 500)   {Object[]}  result    Blank Object
 * @apiErrorExample {json} List error
 {
   "status": false,
   "code": 400,
   "message": "BAD_REQUEST"
   "appVersion": "v1.0.0",
   "result": {
    }
 }
 * @apiSuccessExample {json} Success-Response:
 {
    "status": true,
    "code": 200,
    "message": "SUCCESS",
    "appVersion": "v1.0.0",
    "result": {
    }
}
 */

router.route('/list').get( filmController.listFilm);

/**
 * @api {get} /api/v1/film/film-details/{{uuid}} Film Details
 * @apiDescription get single films
 * @apiVersion 1.0.0
 * @apiName listFilm
 * @apiGroup film
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 * @param {String} uuid uuid(Required)
 *
 *
 * @apiSuccess (OK 200) {Number}     code         200=OK
 * @apiSuccess (OK 200) {Boolean}    status       true for success and false for failure
 * @apiSuccess (OK 200)  {String}    message      API Response message (Success)
 * @apiSuccess (OK 200) {Object[]}   result       result object
 * @apiSuccess (OK 200) {String}     appVersion   API version
 * @apiError (Bad Request 400)   {Boolean}    status    false
 * @apiError (Bad Request 400)   {String}     message   API Response message (username is required)
 * @apiError (Bad Request 400)   {Number}     code      400=Bad Request
 * @apiError (Bad Request 400)   {Object[]}   result    Blank Object
 * @apiError (Internal Server Error 500)   {Boolean}   status    false
 * @apiError (Internal Server Error 500)   {String}    message
 * API Response message (Internal Server Error)
 * @apiError (Internal Server Error 500)   {Number}    code      500=Internal Server Error
 * @apiError (Internal Server Error 500)   {Object[]}  result    Blank Object
 * @apiErrorExample {json} List error
 {
   "status": false,
   "code": 400,
   "message": "BAD_REQUEST"
   "appVersion": "v1.0.0",
   "result": {
    }
 }
 * @apiSuccessExample {json} Success-Response:
 {
    "status": true,
    "code": 200,
    "message": "SUCCESS",
    "appVersion": "v1.0.0",
    "result": {
    }
}
 */

router.route('/film-details/:uuid').get( filmController.getSingleFilm);



export default router;
