import * as Joi from 'joi';

export default {
    login: {
        body: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    },
    register: {
        body: Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    },
    createFilm: {
        body: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
            releaseDate: Joi.date().required(),
            rating: Joi.number().min(1).max(5).required(),
            ticketPrice: Joi.number().required(),
            country: Joi.string().required(),
            //photo: Joi.string().required(),
            genre: Joi.array().required(),
        })
    },
    createComment: {
        body: Joi.object().keys({
            comment: Joi.string().required(),
            filmId: Joi.number().required(),
        })
    }
};
