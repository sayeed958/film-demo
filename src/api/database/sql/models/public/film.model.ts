module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define('Film', {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING,
            },
            releaseDate: {
                type: DataTypes.DATE,
            },
            rating: {
                type: DataTypes.INTEGER,
            },
            ticketPrice: {
                type: DataTypes.DOUBLE,
            },
            country: {
                type: DataTypes.STRING,
            },
            photo: {
                type: DataTypes.STRING,
            },
            genre: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            }

        },
        {
            timestamps: true,
        });

    Film.associate = (models) => {
        Film.hasMany(models.Comment, {
            as: 'Comments',
            foreignKey: 'filmId',
        });

    };
    return Film;
};
