import { Blog } from "../models/blog.js";

export const createBlogService = async (data) => {
    return await Blog.create(data);
};

export const getBlogsService = async (filter) => {
    return await Blog.find(filter)
        // .populate("author", "name")
        .sort({ createdAt: -1 });
};

export const getSingleBlogService = async (id) => {
    return await Blog.findById(id);
};

export const updateBlogService = async (id, data) => {
    return await Blog.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBlogService = async (id) => {
    return await Blog.findByIdAndDelete(id);
};
export const getUniqueCategoriesService = async () => {
    return await Blog.distinct("category");
};

