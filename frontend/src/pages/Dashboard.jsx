import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [quizHistory, setQuizHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { authState } = useAuth();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/quiz/history', {
          headers: { Authorization: `Bearer ${authState.token}` },
        });
        setQuizHistory(data);
      } catch (err) {
        setError('Failed to fetch quiz history.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [authState.token]);

  const latestResult = quizHistory.length > 0 ? quizHistory[0] : null;

  if (loading) {
    return (
            <div className='mt-20'><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>

    <div className="text-center text-xl font-semibold mt-4">Loading Dashboard...</div></div>
  );
  }
  
  if (error) {
     return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className='min-h-screen p-5 '>
      <h1 className="text-4xl font-bold relative text-gray-800 top-4 text-center italic">Welcome to your Dashboard, <strong>{authState.user.name}</strong></h1>

      {latestResult ? (
        <div className="bg-white p-10 pt-15 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Your Latest Career Suggestions</h2>
          <p className="mb-6 text-gray-600">Based on your last quiz taken on {new Date(latestResult.createdAt).toLocaleDateString()}, here are a few paths that might interest you.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {latestResult.suggestedCareers.map((suggestion, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-xl hover:scale-103 transition bg-base-content/20 ">
                <h3 className="text-xl font-bold mb-2">{suggestion.career}</h3>
                <p className="text-base-800 italic mb-4">{suggestion.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Roles:</h4>
                  <ul className="list-disc list-inside text-gray-500 text-sm">
                    {suggestion.roles.map(role => <li key={role}>{role}</li>)}
                  </ul>
                </div>
                 <div className="mb-4">
                  <h4 className="font-semibold mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {suggestion.skills.map(skill => (
                      <span key={skill} className="bg-primary/60 text-primary-content text-xs font-medium px-2.5 py-0.5 rounded-full hover:scale-105 hover:bg-primary">{skill}</span>
                    ))}
                  </div>
                </div>
                <Link 
                  to={`/roadmap/${encodeURIComponent(suggestion.career)}`}
                  className="inline-block mt-4 font-semibold text-primary hover:underline"
                >
                  View Roadmap &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center bg-white p-20 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-3 text-gray-800">Discover Your Perfect Career</h2>
            <p className="text-base mb-12">Take our quick and intelligent quiz to receive personalized career suggestions.</p>
            <Link to="/quiz" className="bg-primary/70 text-white px-8 py-3 flex justify-center  rounded-md hover:bg-primary transition font-semibold text-lg hover:scale-105 shadow-md border-2 border-outline-primary">
                Take the Quiz Now
            </Link>
        </div>
      )}
      
       <div className="m-12 text-lg">
           <Link to="/quiz" className="text-primary hover:underline">
             Or retake the quiz to get new suggestions.
           </Link>
       </div>
    </div>
  );
};

export default Dashboard;
