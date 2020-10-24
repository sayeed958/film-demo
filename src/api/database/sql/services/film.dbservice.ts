import {Op} from 'sequelize';
import pgdb from '../../../../config/sequelize';
import Base from './base.dbservice';

/**
 * @class FilmDbservice
 * @description Allow to create films get all films, singles films and its associated comments
 *
 * */

class FilmDbservice extends Base {
    FilmModel = pgdb['Films'];
    CommentModel = pgdb['Comments'];

    /**
     * @method createFilm
     * @name createFilm
     * @param data
     * */
    createFilm(data) {
        return this.FilmModel.create(data);
    }

    /**
     * @method getSingleFilm
     * @param criteria
     * @name getSingleFilm
     * */
    getSingleFilm(criteria) {
        return this.FilmModel.findOne({
                where: criteria,
                include: [{
                    model: this.CommentModel,
                    as: 'Comments',
                    attributes: ['id', 'comment', 'createdAt']
                    // If require we can include user who has commented
                }],
            },
        );
    }

    /**
     * @name getAllFilm
     * @param criteria
     * @method getAllFilm
     * */
    getAllFilm(criteria) {
        return this.FilmModel.findAll({
                where: criteria,
                include: [{
                    model: this.CommentModel,
                    as: 'Comments',
                    attributes: ['id', 'comment', 'createdAt']
                }],
            },
        );
    }

    /**
     * @name createFilmComment
     * @param reqBody
     * @method createFilmComment
     * */
    createFilmComment(reqBody) {
        return this.CommentModel.create(reqBody);
    }

    /**
     * @name getAllComments
     * @param criteria
     * @param filmCriteria
     * @method getAllComments
     * */
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
