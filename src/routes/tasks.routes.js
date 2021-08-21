import { Router } from 'express';
import {
    createTask,
    deleteTask,
    getOneTask,
    getTask,
    updateTask,
    getTasksByProject,
} from '../controllers/tasks.controller';

const router = Router();

router.get('/', getTask);
router.post('/', createTask);

/* BY ID */
router.get('/:id', getOneTask);
router.get('/by_project/:projectId', getTasksByProject);
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router;