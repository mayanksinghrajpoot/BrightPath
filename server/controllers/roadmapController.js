import Roadmap from '../models/Roadmap.js';
import { generateCareerRoadmap } from '../../services/geminiResponse.js';

const getRoadmap = async (req, res) => {
  const { career } = req.params;

  try {
    // Optional: Check cache first
    const cachedRoadmap = await Roadmap.findOne({ careerName: career });
    if (cachedRoadmap) {
      return res.json(cachedRoadmap);
    }
    
    const roadmapData = await generateCareerRoadmap(career);

    // The response from Gemini is expected to be a JSON string.
    const parsedRoadmap = JSON.parse(roadmapData);

    // Optional: Cache the new roadmap
    const newRoadmap = new Roadmap({
      careerName: career,
      ...parsedRoadmap,
    });
    await newRoadmap.save();

    res.json(newRoadmap);
  } catch (error) {
    console.error('Error fetching roadmap:', error);
    res.status(500).json({ message: 'Server error while fetching roadmap', error: error.message });
  }
};

export { getRoadmap };
