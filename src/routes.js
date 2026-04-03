
import express from "express";
import blogRouter from "./routes/blog.js";
import authrouter from "./routes/auth.js";
import Contactrouter from "./routes/contactform.js";

const router = express.Router();

router.use("/blogs", blogRouter);
router.use("/auth", authrouter);
router.use("/contact", Contactrouter);


export default router;
