import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { products } from '../data/products.js';
import auth from '../middleware/auth.js';
import validateProduct from '../middleware/validateProduct.js';
import { ValidationError } from '../errors/ValidationError.js';

const router = express.Router();


// GET /api/products - List all products (with filtering, pagination, search)
router.get('/', (req, res) => {
  const { category, search, page = 1, limit = 5 } = req.query;
  let result = [...products];

  if (category) result = result.filter(p => p.category === category);
  if (search) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + Number(limit));

  res.json({ total: result.length, products: paginated });
});

// GET /api/products/:id
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new ValidationError('Product not found'));
  res.json(product);
});

// POST /api/products
router.post('/', auth, validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
router.put('/:id', auth, validateProduct, (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new ValidationError('Product not found'));

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE /api/products/:id
router.delete('/:id', auth, (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new ValidationError('Product not found'));

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
});

// GET /api/products/stats - count by category
router.get('/stats/category', (req, res) => {
  const stats = {};
  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  res.json(stats);
});

export default router;

