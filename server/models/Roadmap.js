import mongoose from 'mongoose';

const roadmapSchema = mongoose.Schema({
  careerName: {
    type: String,
    required: true,
    unique: true,
  },
  levels: [
    {
      level: String, // e.g., Beginner, Intermediate, Advanced
      title: String,
      topics: [String],
      resources: [
        {
          name: String,
          url: String,
        },
      ],
    },
  ],
});

const Roadmap = mongoose.model('Roadmap', roadmapSchema);

export default Roadmap;
