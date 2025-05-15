/**
 * Quirky Node.js Demo App
 * A fun, quirky Express service that delivers amusing animal facts
 */
import express from 'express';
import { getRandomFact } from './src/facts.js';

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

/**
 * GET /fact - Returns a random quirky animal fact
 * @returns {object} JSON object with a random fact
 */
app.get('/fact', (req, res) => {
  const fact = getRandomFact();
  res.status(200).json({ fact });
});

// Root route for basic info
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Quirky Node.js Demo App',
    description: 'A fun service that delivers amusing animal facts',
    endpoints: [
      { path: '/fact', method: 'GET', description: 'Returns a random quirky animal fact' }
    ]
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource does not exist'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong on the server'
  });
});

// Start server if this file is run directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🦄 Quirky Facts server listening at http://localhost:${port}`);
  });
}

// Export app for testing
export default app;