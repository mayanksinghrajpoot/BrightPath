import express from 'express';
import { getRoadmap } from '../controllers/roadmapController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:career').get(protect, getRoadmap);

export default router;


//demo api/roadmap/:career
// Example: api/roadmap/software-engineering