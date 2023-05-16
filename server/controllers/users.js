import express from "express";

import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

export const addUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    //       // Create user
    //   const user = await User.create({
    //     username,
    //     password: hashedPassword,
    //   })

    //   if (user) {
    //     res.status(201).json({
    //       _id: user.id,
    //       username: user.username,
    //       token: generateToken(user._id),
    //     })
    //   } else {
    //     res.status(400)
    //     throw new Error('Invalid user data')
    //   }
    // })
    res.status(201).json({
      userID: newUser._id,
      username: newUser.username,
      token: generateToken(newUser._id),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Please fill all the fields" });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  const token = generateToken(user._id);
  res.json({ token, username: user.username, userID: user._id });
};

export const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
