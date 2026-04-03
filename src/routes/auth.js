import express from "express";
import { login } from "../controllers/admin.js"

const authrouter = express.Router();

authrouter.post("/login", login);

export default authrouter;
