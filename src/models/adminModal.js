import mongoose from "mongoose";
let Admin;

try {
    Admin = mongoose.model("admins");
} catch (error) {
  const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email_id: {
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

  Admin = mongoose.model("admins", adminSchema);
}

export default Admin;
