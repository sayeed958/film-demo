/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import * as chai from 'chai';
import 'mocha';
import dataSeed from './dataSeed';

let FilmService;
let pgdb;
let film;
const {expect} = chai;

describe('Film API test initiated', () => {
    before(async () => {
        pgdb = require('../dist/config/sequelize').default;
        global['pgdb'] = pgdb;
        film = await dataSeed.createFilm();
        FilmService = require('../dist/api/services/sql/film.service').default;
    });


    it('Create film', async () => {
        expect(film.dataValues).to.haveOwnProperty('name');
        expect(film.dataValues).to.haveOwnProperty('description');
        expect(film.dataValues).to.haveOwnProperty('rating');
        expect(film.dataValues).to.haveOwnProperty('country');
        expect(film.dataValues).to.haveOwnProperty('ticketPrice');
    });


    it('list  film', async () => {
        const result = await FilmService.listFilm();
        expect(result[0].dataValues).to.haveOwnProperty('name');
        expect(result[0].dataValues).to.haveOwnProperty('description');
        expect(result[0].dataValues).to.haveOwnProperty('rating');
        expect(result[0].dataValues).to.haveOwnProperty('country');
        expect(result[0].dataValues).to.haveOwnProperty('ticketPrice');
    });

    after(async () => {

        await pgdb['Films'].destroy({
            where: {
                id: film.dataValues.id
            }
        });
    });
});
