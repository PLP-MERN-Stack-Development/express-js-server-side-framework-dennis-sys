// server.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import logger from './middleware/logger.js';
import { NotFoundError } from './errors/NotFoundError.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(bodyParser.json());
app.use(logger);

// ✅ Routes
app.use('/api/products', productRoutes);

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ✅ 404 handler
app.use((req, res, next) => {
  next(new NotFoundError('Route not found'));
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Server error',
  });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
