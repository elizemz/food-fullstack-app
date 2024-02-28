import { Response, Request, NextFunction } from "express";

interface IMyError extends Error {
  statusCode: number;
}

const errorHandler = (
  err: IMyError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERR MESSAGE =====>", err.message.cyan);
  console.log("ERR STACK =====>", err.stack?.red.underline);

  if (err.message === "jwt expired")
    err.message = "Your token has expired its use, please log-in again.";
  else if (err.message === "invalid signature")
    err.message = "Token is incorrect!";
  else err.message = err.message;

  res.status(err.statusCode || 500).json({
    message: err.message || "Serverside error, please try again later.",
  });
};

export default errorHandler;
