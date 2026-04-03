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

const assetsData = [
    {
        title: "NRSWA (New Roads and Street Works Act) Services",
        description: "NRSWA (New Roads and Street Works Act) Services details",
        category: "NRSWAStreetWorks",
        displayInHomePage: true,
        featuredImage: {
            data: "nrswa-services.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "Street Works Service Reviews",
        description: "Street Works Service Reviews details",
        category: "NRSWAStreetWorks",
        displayInHomePage: true,
        featuredImage: {
            data: "street-reviews.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "NRSWA Inspections",
        description: "NRSWA Inspections details",
        category: "NRSWAStreetWorks",
        displayInHomePage: true,
        featuredImage: {
            data: "inspections.jpg",
            mimeType: "image/jpeg"
        }
    }
];

const StreetWorks = async () => {
    try {
        // Optional: clear existing project data
        await Blog.deleteMany({ category: "NRSWAStreetWorks" });

        await Blog.insertMany(assetsData);

        console.log("Assets data seeded successfully!");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

StreetWorks();