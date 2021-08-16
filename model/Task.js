import { DataTypes, Sequelize } from "sequelize";
import { db } from "../database/database";

const task = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT
    },
    projectId: {
        type: DataTypes.INTEGER
    },
    done: {
        type: DataTypes.BOOLEAN
    },
},
    { timestamps: false }
);

export default task;