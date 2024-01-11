import mongoose from "mongoose";
let User;

try {
  User = mongoose.model("user");
} catch (error) {
  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  });

   User = mongoose.model("user", userSchema);
}

export default User;
