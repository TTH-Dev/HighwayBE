import AppError from "../utils/AppError.js";

const errorCheck = (err) => {
  if (err.name === "CastError") {
    return new AppError("Invalid ID", 400);
  }

  if (err.name === "ValidationError") {
    return new AppError(err.message, 400);
  }
  if (
    err.name.includes("MongoServerError") &&
    err.message.includes("duplicate key")
  ) {
    return new AppError("Duplicate field value entered", 400);
  }

  if (err.name === "JsonWebTokenError") {
    return new AppError("Invalid token", 401);
  }

  if (err.name === "TokenExpiredError") {
    return new AppError("Token expired", 401);
  }

  return new AppError("Internal Server Error", 500);
};

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else {
    const updatedAppError = errorCheck(err);
    return res
      .status(updatedAppError.statusCode)
      .json({ message: updatedAppError.message });
  }
};

export default errorHandler;
