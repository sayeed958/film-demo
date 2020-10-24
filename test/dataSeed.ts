import * as randomstring from 'randomstring';

const getRoles = () => global['pgdb']['Roles'].findAll({
    raw: true,
    nest: true
});
const createUser = async () => {
    return global['pgdb']['Users'].create({
        email: `${randomstring.generate(7)}@yopmail.com`,
        password: `${randomstring.generate(10)}`,
        phoneNo: `+${randomstring.generate({charset: 'numeric', length: 12})}`,
        firstName: randomstring.generate(7),
        lastName: randomstring.generate(7),
    });
};
const createFilm = async () => {
    return global['pgdb']['Films'].create({
        name: `${randomstring.generate(7)}`,
        description: `${randomstring.generate(10)}`,
        ticketPrice: 100,
        rating: 5,
        country: 'India',
        genre: ['drama'],
        releaseDate: new Date()
    });
};

export default {
    createUser,
    createFilm
};
