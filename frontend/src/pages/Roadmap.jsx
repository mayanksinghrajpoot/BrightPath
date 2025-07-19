import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import RoadmapStep from '../components/RoadmapStep';

const Roadmap = () => {
  const { career } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { authState } = useAuth();

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const { data } = await axios.get(
          `https://brightpath-qxv7.onrender.com/api/roadmap/${encodeURIComponent(career)}`,
          { headers: { Authorization: `Bearer ${authState.token}` } }
        );
        setRoadmap(data);
      } catch (err) {
        setError('Failed to fetch career roadmap. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchRoadmap();
  }, [career, authState.token]);

  if (loading) {
    return (
        <div className=" text-center mt-20 mx-auto p-5">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Generating your personalized roadmap for a <strong>{career}</strong>...</p>
        </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }
  
  return (
    <div className='container min-h-screen mx-auto  bg-white p-8 rounded-lg shadow-lg mt-8'>
      <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
        Your Roadmap to Becoming a <span className="text-primary">{roadmap.careerName || career}</span>
      </h1>
      <p className="text-center text-lg text-gray-500 mb-12">A step-by-step guide from beginner to advanced.</p>
      
      <div className="relative border-l-4 border-success ml-4 md:ml-0 ">
        {roadmap && roadmap.levels.map((step, index) => (
           <RoadmapStep key={index} step={step} isLast={index === roadmap.levels.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
