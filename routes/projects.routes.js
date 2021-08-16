import { Router } from 'express';
import {
    createProject,
    deleteProject,
    getOneProject,
    getProjects,
    updateProject
} from '../controllers/projects.controller'

const router = Router();

router.post('/', createProject);
router.get('/', getProjects);
/* By ID */
router.get('/:id', getOneProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;