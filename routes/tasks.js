import { Router } from 'express';
import { createTask } from '../controllers/tasks.controller';

const router = Router();

// router.get('/', createTask);
router.post('/', createTask);

export default router;