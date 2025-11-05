<<<<<<< HEAD
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
=======
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 
>>>>>>> 1a4e41a301c983ea6d867f1abbb13e1ae2efbbed
