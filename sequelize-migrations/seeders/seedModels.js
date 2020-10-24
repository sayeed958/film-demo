
const {
    Films,
} = require('./seeder-data');

module.exports = {
	/*
  This function will seed all the required data in the Users table
 */
	up: async (queryInterface) => {
		// eslint-disable-next-line implicit-arrow-linebreak
		await queryInterface.bulkInsert({ tableName: 'Films', schema: 'public' }, Films);
	},

	// eslint-disable-next-line no-unused-vars
	down: (_queryInterface, Sequelize) => {
		/*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
	}
};
