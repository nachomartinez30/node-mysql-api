import { Sequelize } from "sequelize";

export const db = new Sequelize('node-projects', 'root', 'z3nitr4m', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3306,
    pool: {
        min: 1,
        max: 5,
        require: 30000,
        idle: 10000,
    },
    logging: false
});