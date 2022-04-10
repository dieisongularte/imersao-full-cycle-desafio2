import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/database.sqlite',
    define: {
        timestamps: false
    }
});