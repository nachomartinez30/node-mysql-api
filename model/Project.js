import { DataTypes, Sequelize } from "sequelize";
import { db } from "../database/database";

const project = db.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
    deliverydat: {
        type: DataTypes.DATE
    },
},
    { timestamps: false }
);

/* RELATION WITH TASK */

export default project;