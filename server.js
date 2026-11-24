import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// // Connect to MongoDB
// connectDB();

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Innovate Inc. Login System API!");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});