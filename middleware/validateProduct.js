// middleware/validateProduct.js
import { ValidationError } from '../errors/ValidationError.js';

export default function validateProduct(req, res, next) {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || price == null || !category || typeof inStock !== 'boolean') {
    return next(new ValidationError('Missing or invalid product fields'));
  }

  next();
}
