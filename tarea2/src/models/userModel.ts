/* Import  mongoose modules and bycript library */
import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

/* Define the user interface */
export interface IUser extends Document {
  name: string;
  email: string;
  role: string;
  password: string;
  status: string;
  comparePassword: (enterPassword: string) => Promise<boolean>;
}

/* Define the user schema */
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: "user" },
  password: { type: String, required: true },
  status: { type: String, required: true, default: "active" },
});

/* Middleware to hash password */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

/* Method to compare password */
userSchema.methods.comparePassword = async function (enterPassword: string) {
  return await bcrypt.compare(enterPassword, this.password);
};

/* Create the user model */
const User = mongoose.model<IUser>("User", userSchema);
export default User;
