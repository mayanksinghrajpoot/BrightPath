import dotenv from 'dotenv';
dotenv.config();
console.log('Path to credentials:', process.env.GOOGLE_APPLICATION_CREDENTIALS);
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import roadmapRoutes from './routes/roadmapRoutes.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/roadmap', roadmapRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
