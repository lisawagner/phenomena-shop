const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token
  if(authHeader) {
    const token = authHeader.split("Bearer ")[1]
    jwt.verify(token, process.env.JWT_KEY, (error, user) => {
      if(error) res.status(403).json("Session token expired or doesn't match")
      req.user = user
      next()
    })
  } else {
    return res.status(401).json("You are not authenticated")
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res.status(403).json("Action not permitted")
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if(req.user.isAdmin) {
      next()
    } else {
      res.status(403).json("Action not permitted")
    }
  })
}


module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
}