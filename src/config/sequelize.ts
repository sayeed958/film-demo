/**
 * Sequelize initialization module
 */
import * as path from 'path';
import * as fs from 'fs';
import { Sequelize } from 'sequelize';
import * as lodash from 'lodash';
import vars from './vars';

const basename = path.basename(__filename);
const sequelizeTransforms = require('sequelize-transforms');

const { postgre } = vars;
const db = {};

const sequelize = new Sequelize(
	postgre.db,
	postgre.username,
	postgre.password,
	{
		dialect: 'postgres',
		host: postgre.host,

		port: postgre.port,

		logging: false,


		dialectOptions: {
			supportBigNumbers: true,
			bigNumberStrings: true,
		},

		omitNull: true,
		native: false,
		define: {
			underscored: false,
			freezeTableName: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
			timestamps: true
		},


		pool: {
			max: 10,
			min: 0,
			idle: 40000,
			acquire: 60000,
			evict: 20000
		}
	}
);

sequelizeTransforms(sequelize);
fs.readdirSync(path.join(__dirname, '../api/database/sql/models/'))
	.reduce((acc, schema) => {
		const files = fs
			.readdirSync(
				path.join(__dirname, `../api/database/sql/models/${schema}`)
			)
			.map((file) => `${schema}/${file}`);
		return [...acc, ...files];
	}, [])
	.filter(
		(file) => file.indexOf('.') !== 0
			&& file !== basename
			&& file.slice(-9) === '.model.js'
	)
	.forEach((file) => {
		const model = sequelize.import(
			path.join(__dirname, '../api/database/sql/models/', file)
		);
		db[model.name] = model;
	});


Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

sequelize
	.sync({ force: false })
	.then(() => {})
	.catch((e) => console.log(e, 1));


export default lodash.extend(
	{
		sequelize,
		Sequelize
	},
	db
);
