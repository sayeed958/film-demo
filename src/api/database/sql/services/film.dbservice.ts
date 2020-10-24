import {Op} from 'sequelize';
import pgdb from '../../../../config/sequelize';
import Base from './base.dbservice';
import constants from '../../../../config/constants';


const {miscMessage} = constants;

class FilmDbservice extends Base {
    FilmModel = pgdb['Film'];
    CommentModel = pgdb['Comment'];


    createFilm(data) {
        return this.FilmModel.create(data);
    }

    getSingleFilm(criteria) {
        return this.FilmModel.findOne({
                where: criteria,
                raw: true,
                nest: true
            },
        );
    }
    getAllFilm(criteria) {
        return this.FilmModel.findAll({
                where: criteria,
                raw: true,
                nest: true
            },
        );
    }
    createFilmComment(reqBody) {
        return this.CommentModel.create(reqBody);
    }

}

export default new FilmDbservice();
