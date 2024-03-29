import mongoose from "mongoose";

let User;

try {
  User = mongoose.model("user");
} catch (error) {
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    verifyToken: String,
    verifyTokenExpiry: Date,
  });

  User = mongoose.model("user", userSchema);
}

export default User;
