# Express Products API

A RESTful API built with Express.js for managing product data with features including authentication, validation, error handling, and advanced querying capabilities.

## Features

- 🔐 Authentication middleware
- ✅ Input validation
- 📝 Comprehensive error handling
- 🔍 Advanced product filtering and search
- 📄 Pagination support
- 📊 Product statistics
- 🎯 Custom middleware for logging

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd express-products-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
AUTH_TOKEN=your_auth_token_here
```

4. Start the server:
```bash
node server.js
```

The server will start running at `http://localhost:3000`

## API Endpoints

### Products

- **GET /api/products**
  - List all products with filtering and pagination
  - Query Parameters:
    - `category`: Filter by product category
    - `search`: Search products by name
    - `page`: Page number (default: 1)
    - `limit`: Items per page (default: 5)

- **GET /api/products/:id**
  - Get a specific product by ID

- **POST /api/products**
  - Create a new product
  - Requires authentication
  - Requires valid product data

- **PUT /api/products/:id**
  - Update an existing product
  - Requires authentication
  - Requires valid product data

- **DELETE /api/products/:id**
  - Delete a product
  - Requires authentication

- **GET /api/products/stats/category**
  - Get product count by category

## Authentication

The API uses token-based authentication. Include the auth token in the request headers:

```http
Authorization: Bearer your_auth_token_here
```

## Error Handling

The API implements custom error handling for:
- Not Found errors (404)
- Validation errors (400)
- Authentication errors (401)
- Server errors (500)

## Project Structure

```
express-products-api/
├── data/
│   └── products.js       # Product data store
├── errors/
│   ├── NotFoundError.js  # Custom error classes
│   └── ValidationError.js
├── middleware/
│   ├── auth.js          # Authentication middleware
│   ├── logger.js        # Request logging
│   └── validateProduct.js# Product validation
├── routes/
│   └── productRoutes.js # Product route handlers
├── server.js            # Application entry point
├── package.json
└── .env                 # Environment variables
```

## Dependencies

- express: Web framework for Node.js
- body-parser: Request body parsing middleware
- dotenv: Environment variable management
- uuid: Unique ID generation

## Development

To run the server in development mode:

```bash
node server.js
```

## License

ISC

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
