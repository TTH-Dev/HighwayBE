import mongoose from "mongoose";
import dotenv from "dotenv";
import { Blog } from "../src/models/blog.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding..."))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const projectData = [
  {
    title: "Banner Image",
    description: "Banner Image for project page",
    category: "project",
    displayInHomePage: true,
    featuredImage: {
      data: "banner1.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Project and Programme Management",
    description: "Project and Programme Management details",
    category: "project",
    displayInHomePage: true,
    featuredImage: {
      data: "project-management.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Our Services",
    description: "Our Services details",
    category: "project",
    displayInHomePage: true,
    featuredImage: {
      data: "services.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Our Approach",
    description: "Our Approach details",
    category: "project",
    displayInHomePage: true,
    featuredImage: {
      data: "approach.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Benefits",
    description: "Benefits details",
    category: "project",
    displayInHomePage: true,
    featuredImage: {
      data: "benefits.jpg",
      mimeType: "image/jpeg"
    }
  }
];

const seedProjects = async () => {
  try {
    // Optional: clear existing project data
    await Blog.deleteMany({ category: "project" });

    await Blog.insertMany(projectData);

    console.log("Project data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProjects();