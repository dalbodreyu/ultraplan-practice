function notFoundHandler(req, res, next) {
  const err = new Error(`Not Found: ${req.originalUrl}`);
  err.status = 404;
  next(err);
}

function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.error(`[${status}] ${err.message}`);
  res.status(status).json({
    error: { message: err.message, status }
  });
}

module.exports = { notFoundHandler, errorHandler };
