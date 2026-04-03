import express from "express";
import {
  contactForm,
  subscribe,
  applyJob,
} from "../controllers/emailController.js";
import {upload} from "../middleware/mailupload.js";

const Contactrouter = express.Router();


Contactrouter.post("/contact", contactForm);
Contactrouter.post("/subscribe", subscribe);
Contactrouter.post("/apply", upload.single("cv"), applyJob);

export default Contactrouter;