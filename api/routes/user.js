const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("./verifyToken");

const router = require("express").Router();

// Update User Method
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
      ).toString()
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new:true
      })
      res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json(error)
  }
})

// Delete Method
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User deleted")
  } catch (error) {
    res.status(500).json(error)
  }
})

// Get One User Method
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const {password, ...others} = user._doc;
    res.status(200).json(others)

  } catch (error) {
    res.status(500).json(error)
  }
})

// Get All Users Method
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  // return only most recent 5 users if this is a new query
  const query = req.query.new
  try {
    const users = query
    ? await User.find().sort( {_id: -1} ).limit(5)
    : await User.find()
    res.status(200).json(users)

  } catch (error) {
    res.status(500).json(error)
  }
})

// Get User Stats Method
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  // total users per month
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try {const data = await User.aggregate([
    //gte = greaterthan
    { $match: { createdAt: { $gte: lastYear } } },
    {
      $project: {
        month: { $month: "$createdAt" },
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1 },
      },
    },
  ])
  res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router