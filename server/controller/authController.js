import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User

export const registerUser = async (req, res) => {
  const { name,age,gender, email, password} =
    req.body;
    const profileImage=req.file;
    console.log('Received fields:', { name, age, gender, email, password });
  console.log('Received file:', profileImage);
    if (!name || !age || !gender || !email || !password || !profileImage) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Create new user
    user = new User({
      name,
      age,
      gender,
      
      email,
      password,
      
     
      profileImage:profileImage ? `/profileImages/${profileImage.filename}` : null, // Update to string path,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    // Save user to database
    await user.save();
    // Return JWT token
    // Return JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    //compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create and sign a JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
