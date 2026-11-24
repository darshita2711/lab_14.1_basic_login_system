# Basic Login System – Innovate Inc.

## Project Description

This project is a basic authentication REST API built using Node.js, Express.js, and MongoDB.

It allows users to register an account and log in securely. Passwords are hashed using bcrypt before being stored in the database. After successful login, the API generates a JSON Web Token (JWT) that can be used to authenticate future requests.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- dotenv
- Postman

## Features

- User registration
- Duplicate email validation
- Secure password hashing using bcrypt
- User login with password verification
- JWT token generation
- JWT authentication middleware
- Protected user profile endpoint
- Error handling for invalid credentials

## Project Structure

```text
basic-login-system/
│
├── config/
│   └── connection.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd basic-login-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_generated_secret_key
```

Replace the placeholder values with your actual MongoDB connection string and a securely generated JWT secret.

**Important:** Never upload your `.env` file to GitHub.

### 5. Start the server

Development mode:

```bash
npm run dev
```

Normal mode:

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

## API Endpoints

### 1. Register a New User

**Endpoint:** `POST /api/users/register`

**URL:**
```text
http://localhost:5000/api/users/register
```

**Request Body:**

```json
{
  "username": "darshita",
  "email": "darshita@example.com",
  "password": "Password123"
}
```

**Success Response:** `201 Created`

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "generated_user_id",
    "username": "darshita",
    "email": "darshita@example.com"
  }
}
```

### 2. Login User

**Endpoint:** `POST /api/users/login`

**URL:**
```text
http://localhost:5000/api/users/login
```

**Request Body:**

```json
{
  "email": "darshita@example.com",
  "password": "Password123"
}
```

**Success Response:** `200 OK`

```json
{
  "message": "Login successful",
  "token": "generated_jwt_token",
  "user": {
    "_id": "generated_user_id",
    "username": "darshita",
    "email": "darshita@example.com"
  }
}
```

### 3. Get User Profile (Protected Route)

**Endpoint:** `GET /api/users/profile`

**URL:**
```text
http://localhost:5000/api/users/profile
```

**Authorization:**

Select Bearer Token in Postman and paste the JWT token received after login.

**Success Response:** `200 OK`

```json
{
  "message": "Profile accessed successfully",
  "user": {
    "_id": "generated_user_id",
    "username": "darshita",
    "email": "darshita@example.com"
  }
}
```

**Note:** The profile endpoint is an additional exercise to demonstrate JWT authentication.

## Authentication Process

1. A user registers with a username, email, and password.
2. The password is hashed using bcrypt before saving.
3. During login, the API finds the user by email.
4. bcrypt compares the entered password with the stored password hash.
5. If the credentials are correct, JWT generates a signed token.
6. The client sends the token with future protected requests.
7. Authentication middleware verifies the token before allowing access.

## Testing

The API was tested using Postman.

Test cases include:

- Successful user registration.
- Duplicate email registration.
- Successful login with correct credentials.
- Failed login with incorrect password.
- Successful access to the protected profile endpoint using a valid token.
- Rejected access without a valid token.

## Security

- Passwords are never stored as plain text.
- bcrypt is used for password hashing.
- JWT is used for authentication.
- Environment variables protect sensitive configuration.
- The `.env` file and `node_modules` folder are excluded from Git.

## Author

Darshita Vaghela

## Project Purpose

This project was developed as part of the Per Scholas software development training program to practice building REST APIs, handling user authentication, hashing passwords, and working with JWT tokens.