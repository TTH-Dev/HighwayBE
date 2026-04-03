import express from "express";
import {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getUniqueCategories
} from "../controllers/blog.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const blogRouter = express.Router();
blogRouter.get("/categories", getUniqueCategories);
blogRouter.use(auth);

blogRouter
  .route("/")
  .get(getBlogs);

blogRouter
  .route("/:id")
  .get(getSingleBlog)
  .delete(deleteBlog);

blogRouter.post("/create-blog", upload.single("featuredImage"), createBlog);
blogRouter.patch("/update-blog/:id", upload.single("featuredImage"), updateBlog);

export default blogRouter;
