import QuizResult from '../models/QuizResult.js';
import { getCareerSuggestions } from '../../services/geminiResponse.js';

const submitQuiz = async (req, res) => {
  const { questions,answers } = req.body;
  const user = req.user;

  if (!answers || !questions) {
    return res.status(400).json({ message: 'Missing quiz answers or questions' });
  }

  try {
    const suggestions = await getCareerSuggestions(questions, answers);
    
    // The response from Gemini is expected to be a JSON string.
    const parsedSuggestions = JSON.parse(suggestions);

    const quizResult = new QuizResult({
      user: user._id,
      scores: answers, // Storing raw answers as scores for simplicity
      suggestedCareers: parsedSuggestions.careers,
    });

    await quizResult.save();

    res.status(201).json(quizResult);
  } catch (error) {
    console.error('Error processing quiz submission:', error);
    res.status(500).json({ message: 'Server error while processing quiz', error: error.message });
  }
};

const getQuizHistory = async (req, res) => {
  try {
    const history = await QuizResult.find({ user: req.user._id }).sort({ createdAt: -1 });
    
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching history' });
  }
};

export { submitQuiz, getQuizHistory };
