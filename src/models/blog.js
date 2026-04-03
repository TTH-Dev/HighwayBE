import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true, enum: ["project", "aboutUs", "design", "newsEvents", "assetsManagement", "conditionSurveys", "NRSWAStreetWorks"] },
    displayInHomePage: { type: Boolean, default: null },
    featuredImage: {
      url: {
        type: String, 
        // required: true
      },
      activityStatus: {
        type: Boolean,
        default: true
      },
      mimeType: {
        type: String,
        required: true
      }
    }

  },
  { timestamps: true }
);

blogSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
  next();
});

export const Blog = mongoose.model("Post", blogSchema);
