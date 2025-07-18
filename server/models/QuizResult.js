import mongoose from 'mongoose';

const quizResultSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    scores: {
      type: Map,
      of: Number,
    },
    suggestedCareers: [
      {
        career: String,
        description: String,
        roles: [String],
        skills: [String],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

export default QuizResult;
