// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { router } from './Routes/PortfolioRoutes.js';
import cors from 'cors'; // Correct import statement

dotenv.config();

const app = express();

// Middleware setup, route registration, etc.
app.use(cors()); // Add cors middleware
app.use(express.json()); // Parse JSON bodies


// Database connection
mongoose.connect(process.env.DB_URI , {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/app', router);
// Start server
const PORT = process.env.Server_PORT// Use a default port if Server_PORT is not provided
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
