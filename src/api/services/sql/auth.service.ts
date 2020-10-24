import AuthDbService from '../../database/sql/services/auth.dbservice';
import constants from '../../../config/constants';
import * as  bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import vars from '../../../config/vars';

const {miscMessage} = constants;
const {jwtSecret, jwtExpirationInterval} = vars;

class AuthService {
    /**
     * @param reqBody
     * @return user
     *
     * */
    async register(reqBody) {
        const methodName = '[register]';
        try {
            const query = {
                email: reqBody.email
            };
            const emailCheck = await AuthDbService.getSingleUser(query);
            if (emailCheck) {
                console.error(methodName, 'Email ID already  Exists!')
                return {error: miscMessage.EMAIL_ALREADY_EXIST};
            }
            const salt = bcrypt.genSaltSync(10);
            reqBody.password = bcrypt.hashSync(reqBody.password, salt);
            const user = await AuthDbService.createUser(reqBody);
            delete user.dataValues.password;
            delete user.dataValues.id;
            return user;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    /**
     * @param reqBody
     * @return token
     * */
    async login(reqBody) {
        try {
            const query = {
                email: reqBody.email
            };
            const account = await AuthDbService.getSingleUser(query);
            if (!account) {
                return {error: miscMessage.USER_NOT_FOUND};
            }
            const checkPassword = bcrypt.compareSync(reqBody.password, account.password);
            if (!checkPassword) {
                return {error: miscMessage.USER_NOT_FOUND};
            }
            const token = await this.generateJWT(account);
            delete account.password;
            return {
                account,
                accessToken: token
            };
        } catch (error) {
            return {error: miscMessage.FAILED};
        }
    }

    generateJWT(req) {
        const token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * parseInt(jwtExpirationInterval),
                userId: req.uuid,
                id: req.id
            },
            jwtSecret
        );
        return token;
    }

}

export default new AuthService();