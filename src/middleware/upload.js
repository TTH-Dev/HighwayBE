import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(
  path.resolve(),
  "public",
  "uploads",
  "blogs"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export default multer({ storage });
