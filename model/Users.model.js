import mongoose from "mongoose";

// User Schema with types and validation
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  hobby: {
    type: String,
    required: [true, "Hobby is required"],
    trim: true,
  },
});

// Create User model
export const Users = mongoose.model("User", userSchema);
