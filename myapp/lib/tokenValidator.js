const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECERET)
      return next();
    }
    catch(error) {
      if (error.name === 'TokenExpireError') {
        return res.status(419).json({
          code: 419,
          message: 'Token alala'
        });
      }
     return res.status(401).json({
       code: 401,
       message: 'Invalid Token'
     });
    }
  }