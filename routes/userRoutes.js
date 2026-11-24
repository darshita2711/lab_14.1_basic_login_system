import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check whether the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email"
      });
    }

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password
    });

    // Return user details without password
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message
    });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });


    // Compare entered password with hashed password
    const isPasswordCorrect = await user.isCorrectPassword(password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        _id: user._id,
        username: user.username
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    // Send successful login response
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }
});
export default router;