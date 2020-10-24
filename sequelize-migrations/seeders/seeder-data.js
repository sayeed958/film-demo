/* eslint-disable no-unused-vars */
const uuidv4 = require('uuid/v4');
/**
 * @example ddlg
*This file insert the data into Films
*/
module.exports = {
    Films: [
        {
            uuid: uuidv4(),
            name: 'DDLG',
            description: 'Hindi film',
            releaseDate: new Date('1985-01-01'),
            rating: 5,
            ticketPrice: 200,
            country: 'India',
            genre: ['drama', 'action'],
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            uuid: uuidv4(),
            name: 'Titanic',
            description: 'Hollywood film',
            releaseDate: new Date('1990-01-01'),
            rating: 5,
            ticketPrice: 200,
            country: 'USA',
            genre: ['drama', 'action'],
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            uuid: uuidv4(),
            name: 'Inception',
            description: 'Hollywood film',
            releaseDate: new Date('2000-01-01'),
            rating: 5,
            ticketPrice: 200,
            country: 'USA',
            genre: ['drama', 'action'],
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]

};
