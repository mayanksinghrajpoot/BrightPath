import express from 'express';
import { submitQuiz, getQuizHistory } from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';
import { get } from 'mongoose';

const router = express.Router();

router.route('/submit').post(protect, submitQuiz);
router.route('/history').get(protect, getQuizHistory);

export default router;


// api/quiz/submit
// api/quiz/history