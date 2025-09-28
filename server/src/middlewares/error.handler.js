import { sendResponse } from "../utils/response.js";

const errorHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return sendResponse(res, 500, "error", err.message || "Internal Server Error", null);
};

export default errorHandler;
