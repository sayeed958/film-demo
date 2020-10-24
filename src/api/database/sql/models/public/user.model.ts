module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define('Users', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                len: [1, 128],
            },
        },
        lastName: {
            type: DataTypes.STRING,
            trim: true,
            validate: {
                len: [1, 128],
            },
        },
        email: {
            type: DataTypes.STRING,
            lowercase: true,
            trim: true,
            validate: {
                isEmail: true,
                notEmpty: true,
                is: /^\S+@\S+\.\S+$/,
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [8, 128],
            },
        },

        phoneNo: {
            type: DataTypes.STRING,
            trim: true,
            allowNull: true
        },
    }, {
        timestamps: true,
    });


    return Users;
};
