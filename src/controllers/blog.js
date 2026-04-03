import fs from "fs";
import path from "path";

import {
  createBlogService,
  deleteBlogService,
  getBlogsService,
  getSingleBlogService,
  getUniqueCategoriesService,
  updateBlogService,
} from "../services/blog.js";

import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";


export const createBlog = catchAsync(async (req, res) => {
  let imageData = null;

  if (req.file) {
    imageData = {
      url: `/uploads/blogs/${req.file.filename}`,
      mimeType: req.file.mimetype,
    };
  }

  const blog = await createBlogService({
    ...req.body,
    featuredImage: imageData,
  });

  res.status(201).json({
    status: "success",
    data: blog,
  });
});


export const getBlogs = catchAsync(async (req, res) => {
  const { category, title, activityStatus } = req.query;

  const filter = {};

  if (category) {
    filter.category = category;
  }
if(search){
  filter.$or =[{
    title: {
      $regex: search, $options: "i"
    }
  }]
}
  if (title) {
    filter.title = { $regex: title, $options: "i" };
  }

  if (activityStatus !== undefined) {
    filter["featuredImage.activityStatus"] = activityStatus === "true";
  }

  const blogs = await getBlogsService(filter);

  res.status(200).json({
    status: "success",
    results: blogs.length,
    data: blogs,
  });
});

export const getSingleBlog = catchAsync(async (req, res, next) => {
  const blog = await getSingleBlogService(req.params.id);

  if (!blog) return next(new AppError("Blog not found", 404));

  res.status(200).json({
    status: "success",
    data: blog,
  });
});


export const updateBlog = catchAsync(async (req, res, next) => {
  const existingBlog = await getSingleBlogService(req.params.id);

  if (!existingBlog) {
    return next(new AppError("Blog not found", 404));
  }

  let imageData = existingBlog.featuredImage;

  if (req.file) {
    if (existingBlog.featuredImage?.url) {
      const oldPath = path.join(
        path.resolve(),
        "public",
        existingBlog.featuredImage.url
      );

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    imageData = {
      url: `/uploads/blogs/${req.file.filename}`,
      mimeType: req.file.mimetype,
    };
  }

  const blog = await updateBlogService(req.params.id, {
    ...req.body,
    featuredImage: imageData,
  });

  res.status(200).json({
    status: "success",
    data: blog,
  });
});


export const deleteBlog = catchAsync(async (req, res, next) => {
  const blog = await getSingleBlogService(req.params.id);

  if (!blog) return next(new AppError("Blog not found", 404));

  if (blog.featuredImage?.url) {
    const filePath = path.join(
      path.resolve(),
      "public",
      blog.featuredImage.url
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  await deleteBlogService(req.params.id);

  res.status(204).json({ status: "success" });
});


export const getUniqueCategories = catchAsync(async (req, res) => {
  const categories = await getUniqueCategoriesService();

  res.status(200).json({
    status: "success",
    results: categories.length,
    data: categories,
  });
});