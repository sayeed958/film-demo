import * as express from 'express';
import validate from 'express-validation';
import authController from '../../../controllers/sql/auth.controller';
import authValidation from '../../../validations/validation'

const router = express.Router();
const {login, register} = authValidation;
/**
 * @api {post} /api/v1/auth/login Login
 * @apiDescription login
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 *
 * @apiParam  {String}             email                email (Required)
 * @apiParam  {String}             password            password(Required)
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
   "message": "INVALID_EMAIL"
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
         "account": {
             "id": 6,
             "uuid": "fbb3f55a-a7d9-4a0f-b233-e68d53044bf9",
             "firstName": "test",
             "lastName": "last name",
             "email": "tes11qt1@test.com",
             "phoneNo": null,
             "createdAt": "2020-10-24T09:15:20.758Z",
             "updatedAt": "2020-10-24T09:15:20.758Z"
         },
         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDM1Mzk4NDgsInVzZXJJZCI6ImZiYjNmNTVhLWE3ZDktNGEwZi1iMjMzLWU2OGQ1MzA0NGJmOSIsImlkIjo2LCJpYXQiOjE2MDM1MzYyNDh9.7NaA9oS5imsd_7lxdx6jnV8SgcRMuYDZcHy3LWQBp_0"
     }
 }
 */

router.route('/login').post(validate(login), authController.login);

/**
 * @api {post} /api/v1/auth/register Register
 * @apiDescription Register
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 * @apiHeader {String} Authorization JWT-TOKEN
 *
 * @apiParam  {String}             email            email (Required)
 * @apiParam  {String}             password          password (Required)
 * @apiParam  {String}             firstName            firstName (Required)
 * @apiParam  {String}             lastName            lastName (Required)
 * @apiParam  {String}             phoneNo            phoneNo (Optional)
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
     "message": "FAILED"
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
        "uuid": "fbb3f55a-a7d9-4a0f-b233-e68d53044bf9",
        "email": "tes11qt1@test.com",
        "firstName": "test",
        "lastName": "last name",
        "updatedAt": "2020-10-24T09:15:20.758Z",
        "createdAt": "2020-10-24T09:15:20.758Z",
        "phoneNo": null
    }
}
 */

router.route('/register').post(validate(register), authController.register);


export default router;
