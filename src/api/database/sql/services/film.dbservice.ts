import {Op} from 'sequelize';
import pgdb from '../../../../config/sequelize';
import Base from './base.dbservice';
import constants from '../../../../config/constants';


const {miscMessage} = constants;

class FilmDbservice extends Base {
    FilmModel = pgdb['Films'];
    CommentModel = pgdb['Comments'];


    createFilm(data) {
        return this.FilmModel.create(data);
    }

    getSingleFilm(criteria) {
        return this.FilmModel.findOne({
                where: criteria,
                include: [{
                    model: this.CommentModel,
                    as: 'Comments',
                    attributes: ['id', 'comment', 'createdAt']
                }],
                //raw: true,
                //nest: true
            },
        );
    }

    getAllFilm(criteria) {
        return this.FilmModel.findAll({
                where: criteria,
                include: [{
                    model: this.CommentModel,
                    as: 'Comments',
                    attributes: ['id', 'comment', 'createdAt']
                }],
                // raw: true,
                // nest: true
            },
        );
    }

    createFilmComment(reqBody) {
        return this.CommentModel.create(reqBody);
    }

    getAllComments(criteria, filmCriteria = null) {
        return this.CommentModel.findAll({
            where: criteria,
            include: [{
                where: filmCriteria,
                model: this.FilmModel,
                as: 'filmId',
                attributes: ['id', 'name']
            }],
        });
    }

}

export default new FilmDbservice();
