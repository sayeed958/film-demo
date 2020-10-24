module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true
            },
            comment: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: true,
        });
    Comments.associate = (models) => {
        Comments.belongsTo(models.Users, {
            as: 'User',
            foreignKey: 'userId',
        });
        Comments.belongsTo(models.Films, {
            as: 'Film',
            foreignKey: 'filmId',
        });
    }
    return Comments;
};
