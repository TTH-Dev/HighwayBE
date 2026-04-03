import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../src/models/auth.js";

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected for seeding..."))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const seedAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({ email: "admin@example.com" });
    if (adminExists) {
      console.log("Admin already exists");
      process.exit();
    }

    const admin = new Admin({
      name: "Admin",
      email: "admin@example.com",
      password: "123456",
    });

    await admin.save();
    console.log("Admin seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
