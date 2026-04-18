import express from "express";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
import router from "./routes.js";
import AppError from "./utils/AppError.js";
import errorHandler from "./utils/ErrorHandler.js";
import path from "path";

const app = express();

app.use('/public', express.static(path.join(path.resolve(), 'public')));

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:5173", "https://www.treadstoneis.co.uk" , "https://www.dashboard.treadstoneis.co.uk", "dashboard.treadstoneis.co.uk"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);

app.options("*", cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

app.use(cookieParser());
app.use(mongoSanitize());

app.use("/api", router);



app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

export default app;
