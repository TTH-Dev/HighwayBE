import mongoose from "mongoose";
import dotenv from "dotenv";
import { Blog } from "../src/models/blog.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for About Us seeding..."))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const aboutData = [
  {
    title: "Banner Image",
    description: "About Us Banner",
    category: "aboutUs",
    displayInHomePage: true,
    featuredImage: {
      data: "about-banner.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Your Network. Our Expertise.",
    description: "Expertise description",
    category: "aboutUs",
    displayInHomePage: true,
    featuredImage: {
      data: "network.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Our Purpose",
    description: "Purpose description",
    category: "aboutUs",
    displayInHomePage: true,
    featuredImage: {
      data: "purpose.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Data-Led Decision Making",
    description: "Data-driven decisions",
    category: "aboutUs",
    displayInHomePage: true,
    featuredImage: {
      data: "data.jpg",
      mimeType: "image/jpeg",
      url: "uploads/blogs/1773828291011-Screenshot 2025-08-14 124711.png"
    }
  },
  {
    title: "End-to-End Highways Support",
    description: "Highways support",
    category: "aboutUs",
    displayInHomePage: true,
    featuredImage: {
      data: "highways.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Working With Treadstone",
    description: "Working details",
    category: "aboutUs",
    displayInHomePage: true,
    featuredImage: {
      data: "treadstone.jpg",
      mimeType: "image/jpeg"
    }
  }
];

const seedAbout = async () => {
  try {
    // Remove old aboutUs data (optional)
    await Blog.deleteMany({ category: "aboutUs" });

    await Blog.insertMany(aboutData);

    console.log("About Us data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAbout();