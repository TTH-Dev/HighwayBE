import express from "express";
import { login, forgotPassword, resetPassword } from "../controllers/admin.js"

const authrouter = express.Router();

authrouter.post("/login", login);
authrouter.post("/forgot-password", forgotPassword);
authrouter.post("/reset-password/:token", resetPassword);
 
export default authrouter;
