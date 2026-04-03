import mongoose from "mongoose";
import dotenv from "dotenv";
import { Blog } from "../src/models/blog.js"; // adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for Design seeding..."))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const designData = [
  {
    title: "Design Services",
    description: "Design Services details",
    category: "design",
    displayInHomePage: true,
    featuredImage: {
      data: "design-services.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Maintenance Scheme Design",
    description: "Maintenance Scheme Design details",
    category: "design",
    displayInHomePage: true,
    featuredImage: {
      data: "maintenance.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Our Services",
    description: "Our Services details",
    category: "design",
    displayInHomePage: true,
    featuredImage: {
      data: "our-services.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Our Approach",
    description: "Our Approach details",
    category: "design",
    displayInHomePage: true,
    featuredImage: {
      data: "approach.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Standards and Compliance",
    description: "Standards and Compliance details",
    category: "design",
    displayInHomePage: true,
    featuredImage: {
      data: "compliance.jpg",
      mimeType: "image/jpeg"
    }
  },
  {
    title: "Section 38",
    description: "Section 38 details",
    category: "design",
    displayInHomePage: true,
    featuredImage: {
      data: "section38.jpg",
      mimeType: "image/jpeg"
    }
  }
];

const seedDesign = async () => {
  try {
    // Remove old design data (optional)
    await Blog.deleteMany({ category: "design" });

    await Blog.insertMany(designData);

    console.log("Design data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDesign();