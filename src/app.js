import express, { json } from 'express';
import morgan from "morgan";

/* IMPORT ROUTES */
import projectsRoutes from "./routes/projects.routes";
import tasksRoutes from "./routes/tasks.routes";

/* INITIALIZATING */
const app = express();

/* MIDDLEWARES SETUPS */
app.use(json());
app.use(morgan('dev'));

/* ROUTES CONFIG */
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);

export default app;