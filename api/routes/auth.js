const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
      ).toString(),
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
  }
  
})

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    // !user && res.status(401).json("Username incorrect")
    if (!user) {
      res.status(401).json("Username incorrect")
      // stop execution of this callback to eliminate duplication
      return
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    )
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    // password !== req.body.password && res.status(401).json("Password incorrect")
    if(originalPassword !== req.body.password) {
      res.status(401).json("Password incorrect")
      
      return
    }
    
    const accessToken = jwt.sign(
      {
        id:user._id,
        isAdmin: user.isAdmin,
      },
        process.env.JWT_KEY,
        { expiresIn:"3d" }
    )

    // res.status(200).json(user)
    const {password, ...others} = user._doc;
    res.status(200).json({...others, accessToken})
    
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;