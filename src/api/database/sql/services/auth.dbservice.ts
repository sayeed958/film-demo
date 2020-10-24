import {Op} from 'sequelize';
import pgdb from '../../../../config/sequelize';
import Base from './base.dbservice';

class StoreDbservice extends Base {
    AuthModel = pgdb['Users'];


    createUser(data) {
        return this.AuthModel.create(data);
    }

    getSingleUser(criteria) {
        return this.AuthModel.findOne({
                where: criteria,
                raw: true,
                nest: true
            },
        );
    }

    getAllUser(criteria) {
        return this.AuthModel.findAll({
                where: criteria,
                raw: true,
                nest: true
            },
        );
    }
}

export default new StoreDbservice();
