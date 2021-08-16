import { DataTypes, Sequelize } from "sequelize";
import { db } from "../database/database";
import Task from "./Task";

const Project = db.define('projects', {
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
Project.hasMany(Task, { foreignKey: 'projectId', sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: 'projectId', sourceKey: 'id' });

export default Project;