import FilmDbService from '../../database/sql/services/film.dbservice';
import constants from '../../../config/constants';

import vars from '../../../config/vars';

const {miscMessage} = constants;
const {jwtSecret, jwtExpirationInterval} = vars;

/**
 * @class FilmService
 * @description Film CRUD operation
 * @public
 * */
class FilmService {
    /**
     * @method createFilm
     * @param reqBody
     * @return created film
     *
     * */
    createFilm = (reqBody) => FilmDbService.createFilm(reqBody);

    /**
     * @method listFilm
     * @param reqBody
     * @return films
     *
     * */
    listFilm = (reqBody) => FilmDbService.getAllFilm(reqBody);

    /**
     * @method getFilmDetails
     * @param reqBody
     * @return film
     *
     * */
    getFilmDetails = (reqBody) => FilmDbService.getSingleFilm(reqBody);


}

export default new FilmService();