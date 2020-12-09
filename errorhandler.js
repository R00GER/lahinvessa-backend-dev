const errorHandler = (error, req, res, next) => {
  if (error.name === 'TokenExpiredError') {
    return res.status(440).json({ err: error, message: 'token expired' });
  }
};

exports.errorHandler = errorHandler;
