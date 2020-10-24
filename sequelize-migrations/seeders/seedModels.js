const {
    Films,
    Users,
    Comments
} = require('./seeder-data');

module.exports = {
/*
This function will seed all the required data in the Users table
*/
    up: async (queryInterface) => {
        // eslint-disable-next-line implicit-arrow-linebreak
        await queryInterface.bulkInsert({tableName: 'Films', schema: 'public'}, Films);
        await queryInterface.bulkInsert({tableName: 'Users', schema: 'public'}, Users);
        await queryInterface.bulkInsert({tableName: 'Comments', schema: 'public'}, Comments);
    },

    // eslint-disable-next-line no-unused-vars
    down: (_queryInterface, Sequelize) => {
    }
};
