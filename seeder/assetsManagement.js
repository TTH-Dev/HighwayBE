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
        title: "Highways Asset Management",
        description: "Highways Asset Management details",
        category: "assetsManagement",
        displayInHomePage: true,
        featuredImage: {
            data: "highways.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "Asset Management Strategy and Frameworks",
        description: "Asset Management Strategy and Frameworks details",
        category: "assetsManagement",
        displayInHomePage: true,
        featuredImage: {
            data: "strategy.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "Standards, Compliance and Best Practice",
        description: "Standards, Compliance and Best Practice details",
        category: "assetsManagement",
        displayInHomePage: true,
        featuredImage: {
            data: "standards.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "Asset Management Documentation Suite",
        description: "Asset Management Documentation Suite details",
        category: "assetsManagement",
        displayInHomePage: true,
        featuredImage: {
            data: "documentation.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "Benefits",
        description: "Benefits details",
        category: "assetsManagement",
        displayInHomePage: true,
        featuredImage: {
            data: "benefits.jpg",
            mimeType: "image/jpeg"
        }
    }
];

const seedAssets = async () => {
    try {
        // Optional: clear existing project data
        await Blog.deleteMany({ category: "assetsManagement" });

        await Blog.insertMany(assetsData);

        console.log("Assets data seeded successfully!");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAssets();