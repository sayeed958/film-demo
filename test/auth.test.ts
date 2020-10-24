/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import * as chai from 'chai';
import 'mocha';
import * as randomstring from 'randomstring';
import constant from '../dist/config/constants';
import dataSeed from './dataSeed';

let AuthService;

let pgdb;
let user;
const {expect} = chai;

describe('Auth APIs test initiated', () => {
    /**
     * @description seeding dummy user
     * */
    before(async () => {
        pgdb = require('../dist/config/sequelize').default;
        global['pgdb'] = pgdb;
        user = await dataSeed.createUser();
        AuthService = require('../dist/api/services/sql/auth.service').default;
    });

    it('Test Registered user properties', async () => {
        expect(user.dataValues).to.haveOwnProperty('email');
        expect(user.dataValues).to.haveOwnProperty('firstName');
        expect(user.dataValues).to.haveOwnProperty('lastName');
    });

    it('Register new user', async () => {
        const result = await AuthService.register({
            email: user.email,
            password: randomstring.generate(8),
        });
        expect(result).to.haveOwnProperty('error');
    });

    it('Login random user', async () => {
        const result = await AuthService.login({
            email: user.email,
            password: randomstring.generate(8)
        });
        expect(result).to.haveOwnProperty('error');
        expect(result.error).to.equal(constant.miscMessage.USER_NOT_FOUND);
    });

    /**
     * @description flush seeded user
     * */
    after(async () => {
        await pgdb['Users'].destroy({
            where: {
                id: user.id
            }
        });
    });
});
