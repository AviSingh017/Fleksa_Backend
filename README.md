# Fleksa_Backend

**Let me answer each of the questions asked:**

1. **Why did you choose your particular data structure to store products in the backend?**
   In this implementation, the data structure used to store products is a MongoDB Atlas database. MongoDB is a NoSQL database that provides flexibility and scalability, making it suitable for handling unstructured or semi-structured data like product information. Using MongoDB allows for easy querying, indexing, and efficient handling of large amounts of data, which is important in an e-commerce application where product data can be extensive.

2. **How did you handle error cases in your API?**
   Error handling in the API is implemented by catching any exceptions or errors that may occur during database operations or API requests. When an error is encountered, an appropriate error message is returned along with an HTTP status code to indicate the error to the client. For example, if there is an error connecting to the database, a 500 Internal Server Error response is sent. If a requested product is not found, a 404 Not Found response is returned.

3. **What measures did you take to ensure your API is secure?**
   - Enforced input validation and sanitization to prevent security vulnerabilities like SQL injection or NoSQL injection.
   - Used HTTPS to encrypt data transmission between the client and the server.
   - Applying security best practices, such as regularly updating dependencies and libraries, and following secure coding guidelines.

4. **If given more time, how would you improve this API?**
   Given more time, here are some improvements that can be made to the API:
   - Implementing authentication mechanisms, such as JWT (JSON Web Tokens), to ensure that only authorized users can access the API endpoints.
   - Implementing rate limiting to protect against abuse and potential DoS attacks.
   - Adding pagination and sorting options to the listing endpoint (`/products`) to handle large amounts of data more efficiently.
   - Adding additional endpoints or functionality as required by the e-commerce application, such as user management, order handling, or inventory management.
   - Writing comprehensive unit tests and integration tests to ensure the correctness and robustness of the API.

5. **What was your approach to testing the API endpoints?**
   In order to test the API endpoints, you can use tools like ThunderClient, and Postman, or automated testing frameworks like Jest or Mocha. You can make HTTP requests to the API endpoints and verify the responses. Below I have mentioned in detail how to use the application.


Certainly! Here's an example of a README file that provides instructions on installing and using the e-commerce application:

# E-Commerce Application

This is a simple e-commerce application that provides basic functionality for managing products. It includes REST API endpoints for listing products, creating new products, updating existing products, and deleting products.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:
   ```bash
   cd Backend
   npm install
   ```

3. Set up MongoDB Atlas:
   - Create an account on MongoDB Atlas and set up a new cluster.
   - Obtain the connection URI for your MongoDB Atlas cluster.

4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following line to the `.env` file, replacing `<YOUR_MONGODB_ATLAS_CONNECTION_URI>` with your MongoDB Atlas connection URI:
     ```plaintext
     MONGODB_URI=<YOUR_MONGODB_ATLAS_CONNECTION_URI>
     ```

5. Start the server:
   ```bash
   npm run start
   ```

6. The server should now be running at `http://localhost:5000`.

## API Routes

The following API routes are available:

- `GET /products` - Get all products.
- `POST /add/product` - Create a new product.
- `PUT /product/:id` - Update a product by ID.
- `DELETE /product/:id` - Delete a product by ID.

### Request Examples

- Get all products:
  ```plaintext
  GET http://localhost:5000/products
  ```

- Create a new product:
  ```plaintext
  POST http://localhost:5000/add/product
  Content-Type: application/json

  {
    "title": "Shoes",
    "image": "https://media.istockphoto.com/id/172417586/photo/elegant-black-leather-shoes.jpg?s=612x612&w=0&k=20&c=c_tTljwbu2m0AGxwb27NxCgG0Y2Cv-C4v8q6V36RYbw=",
    "description": "Formal Shoes",
    "rating": 8.8,
    "price": 899
  }
  ```

- Update a product:
  ```plaintext
  PUT http://localhost:5000/product/:id
  Content-Type: application/json

  {
    "title": "Updated Product Name",
    "image": "change link",
    "description": "Change description",
    "rating": 7.8,
    "price": 24.99,
  }
  ```

- Delete a product:
  ```plaintext
  DELETE http://localhost:5000/product/:id
  ```

Replace `:id` in the URL with the actual ID of the product.   


**Deployed Backend Link**
Link : https://fleksa-ahf0.onrender.com/
