module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
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
    Comment.associate = (models) => {
        Comment.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'userId',
        });
        Comment.belongsTo(models.Film, {
            as: 'Film',
            foreignKey: 'filmId',
        });
    }
    return Comment;
};
