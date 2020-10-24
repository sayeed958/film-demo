import * as express from 'express';

import validate from 'express-validation';

import filmController from '../../../controllers/sql/film.controller';
import authValidation from '../../../validations/validation'
import authVerify from '../../../middlewares/authVerify'

const router = express.Router();
const {createFilm, createComment} = authValidation;
import upload from '../../../middlewares/fileUpload';

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
    "message": "OK",
    "appVersion": "v1.0.0",
    "result": {
        "uuid": "4878d0b2-0a26-4d96-b44d-08c36ebce996",
        "id": 31,
        "name": "G-V1",
        "releaseDate": "2005-01-01T00:00:00.000Z",
        "rating": 4,
        "ticketPrice": 200,
        "country": "India",
        "description": "hollywood film",
        "genre": [
            "drama",
            "action"
        ],
        "photo": "0ad3c5a4-cff5-49ef-8f62-d30edac103a2.png",
        "updatedAt": "2020-10-24T20:17:17.256Z",
        "createdAt": "2020-10-24T20:17:17.256Z"
    }
}
 */

router.route('/create').post(upload.single('photo'), validate(createFilm), filmController.createFilm);

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
     "result": [
         {
             "id": 1,
             "uuid": "cde5f1e2-4732-4355-b1b4-f2db0a740040",
             "name": "DDLG",
             "description": "Hindi film",
             "releaseDate": "1985-01-01T00:00:00.000Z",
             "rating": 5,
             "ticketPrice": 200,
             "country": "India",
             "photo": null,
             "genre": [
                 "drama",
                 "action"
             ],
             "createdAt": "2020-10-24T11:39:40.774Z",
             "updatedAt": "2020-10-24T11:39:40.774Z",
             "Comments": [
                 {
                     "id": 3,
                     "comment": "awesome movie",
                     "createdAt": "2020-10-24T11:39:40.774Z"
                 }
             ]
         },
         {
             "id": 2,
             "uuid": "a4caa2dd-ee52-40f6-8962-0cba79157b37",
             "name": "Titanic",
             "description": "Hollywood film",
             "releaseDate": "1990-01-01T00:00:00.000Z",
             "rating": 5,
             "ticketPrice": 200,
             "country": "USA",
             "photo": null,
             "genre": [
                 "drama",
                 "action"
             ],
             "createdAt": "2020-10-24T11:39:40.774Z",
             "updatedAt": "2020-10-24T11:39:40.774Z",
             "Comments": []
         },
         {
             "id": 3,
             "uuid": "c6b616e8-cace-4446-a5ad-a7b50b74b792",
             "name": "Inception",
             "description": "Hollywood film",
             "releaseDate": "2000-01-01T00:00:00.000Z",
             "rating": 5,
             "ticketPrice": 200,
             "country": "USA",
             "photo": null,
             "genre": [
                 "drama",
                 "action"
             ],
             "createdAt": "2020-10-24T11:39:40.774Z",
             "updatedAt": "2020-10-24T11:39:40.774Z",
             "Comments": []
         }
     ]
 }
 */

router.route('/list').get(filmController.listFilm);

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
        "id": 2,
        "uuid": "1691f4fc-37b6-4a45-afe5-fcdf9dfb4d51",
        "name": "test",
        "description": "test ",
        "releaseDate": "2020-10-10T00:00:00.000Z",
        "rating": 1,
        "ticketPrice": 202,
        "country": "IN",
        "photo": "abcd.jpg",
        "genre": [
            "test"
        ],
        "createdAt": "2020-10-24T09:56:55.933Z",
        "updatedAt": "2020-10-24T09:56:55.933Z",
        "Comments": []
    }
}
 */

router.route('/film-details/:uuid').get(filmController.getSingleFilm);

/**
 * @api {get} /api/v1/film/film-comment create film comment
 * @apiDescription  create film comment
 * @apiVersion 1.0.0
 * @apiName createFilmComment
 * @apiGroup film
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 * @apiHeader {String} x-access-token JWT Token(required)
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
         "uuid": "6f9135c4-cb73-4c8f-bec9-71479e8de604",
         "id": 13,
         "userId": 5,
         "comment": "test",
         "filmId": 1,
         "updatedAt": "2020-10-24T20:18:55.735Z",
         "createdAt": "2020-10-24T20:18:55.735Z"
     }
 }
 */

router.route('/comment').post(authVerify, validate(createComment), filmController.createComment);


export default router;
