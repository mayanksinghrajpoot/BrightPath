import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const quizQuestions = [
  {
    question: "When faced with a complex problem, you are more likely to:",
    options: ["Break it down into smaller, logical steps.", "Brainstorm creative and unconventional solutions.", "Discuss it with others to get different perspectives.", "Research existing data and precedents to find a solution."]
  },
  {
    question: "Which of these activities sounds most appealing?",
    options: ["Building a functional application or a gadget.", "Designing a visually stunning poster or website.", "Organizing a community event or workshop.", "Analyzing a large dataset to find hidden trends."]
  },
  {
    question: "In a team project, you naturally take on the role of:",
    options: ["The planner who organizes tasks and timelines.", "The visionary who comes up with the core ideas.", "The communicator who ensures everyone is heard and aligned.", "The critic who ensures the project is accurate and high-quality."]
  },
  {
    question: "You prefer a work environment that is:",
    options: ["Structured and predictable.", "Dynamic and values innovation.", "Collaborative and people-focused.", "Quiet and allows for deep concentration."]
  },
  {
    question: "What kind of impact do you want to make in your career?",
    options: ["Build useful things that solve real-world problems.", "Create beautiful experiences that evoke emotion.", "Help and empower other people to grow.", "Discover new knowledge and insights."]
  },
   {
    question: "When learning something new, you prefer:",
    options: ["Hands-on practice and experimentation.", "Visual aids, mockups, and prototypes.", "Group discussions and role-playing.", "Reading books, articles, and case studies."]
  }
];


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { authState } = useAuth();
  const navigate = useNavigate();

  const handleAnswer = (optionIndex) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handleSubmit = async () => {
    if (Object.keys(answers).length !== quizQuestions.length) {
        setError("Please answer all questions before submitting.");
        return;
    }
    setError('');
    setLoading(true);
    try {
      const { data } = await axios.post(
        'https://brightpath-qxv7.onrender.com/api/quiz/submit',
        { questions: quizQuestions, answers },
        { headers: { Authorization: `Bearer ${authState.token}` } }
      );
      // Navigate to dashboard, which will now have the latest result.
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit quiz.');
      setLoading(false);
    }
  };

  const isQuizFinished = currentQuestionIndex === quizQuestions.length - 1 && answers[currentQuestionIndex] !== undefined;

  return (
    <div className="max-w-2xl mx-auto mt-4">
      <div className="p-8 bg-white rounded-lg drop-shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Career Interest Quiz</h1>
        <p className="text-center text-gray-600 mb-6">Answer a few questions to discover your path.</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            {/* <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex) / (quizQuestions.length-1)) * 100}%` }}>
            </div> */}
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(Object.keys(answers).length / quizQuestions.length) * 100}%` }}>
            </div>
          </div>
          <p className="text-sm text-center text-gray-600 mt-2">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">{quizQuestions[currentQuestionIndex].question}</h2>
          <div className="space-y-4">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-4 border rounded-lg transition-all duration-200 ${
                  answers[currentQuestionIndex] === index
                    ? 'bg-primary text-white border-primary ring-2 ring-indigo-300'
                    : 'bg-base-content/70 hover:bg-primary-content hover:outline hover:scale-103'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {isQuizFinished && (
           <div className="mt-8 text-center">
             <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 font-semibold text-success-content bg-success/60 bg-outline rounded-lg hover:bg-success
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-green-500 disabled:bg-green-300"
              >
               {loading ? 'Analyzing...' : 'See Your Results'}
             </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
