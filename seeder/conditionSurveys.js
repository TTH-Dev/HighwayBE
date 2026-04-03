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
        title: "Condition Surveys",
        description: "Condition Surveys details",
        category: "conditionSurveys",
        displayInHomePage: true,
        featuredImage: {
            data: "condition-survey.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "PAS 2161-Aligned Survey Services",
        description: "PAS 2161-Aligned Survey Services details",
        category: "conditionSurveys",
        displayInHomePage: true,
        featuredImage: {
            data: "pas2161.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "AEI Footway Survey",
        description: "AEI Footway Survey details",
        category: "conditionSurveys",
        displayInHomePage: true,
        featuredImage: {
            data: "aei-footway.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "Client Workshop and Survey Alignment",
        description: "Client Workshop and Survey Alignment details",
        category: "conditionSurveys",
        displayInHomePage: true,
        featuredImage: {
            data: "workshop.jpg",
            mimeType: "image/jpeg"
        }
    },
    {
        title: "Benefits",
        description: "Benefits details",
        category: "conditionSurveys",
        displayInHomePage: true,
        featuredImage: {
            data: "benefits.jpg",
            mimeType: "image/jpeg"
        }
    }
];

const conditionSurvey = async () => {
    try {
        // Optional: clear existing project data
        await Blog.deleteMany({ category: "conditionSurveys" });

        await Blog.insertMany(assetsData);

        console.log("Assets data seeded successfully!");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

conditionSurvey();