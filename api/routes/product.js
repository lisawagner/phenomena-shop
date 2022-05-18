const Product = require("../models/Product");
const { verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("./verifyToken");

const router = require("express").Router();

// Create Product Method
router.post("/", verifyTokenAndAdmin, async (req, res) =>{
  const newProduct = new Product(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

// Update Product Method
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new:true })
      res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

// Delete Method
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("Product deleted")
  } catch (error) {
    res.status(500).json(error)
  }
})

// Get One Product Method
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)

  } catch (error) {
    res.status(500).json(error)
  }
})

// Get All Products Method
router.get("/", async (req, res) => {
  const queryNew = req.query.new
  const queryCategory = req.query.category

  try {
    let products;

    if(queryNew) {
      products = await Product.find().sort({createdAt: -1}).limit(1)
    } else if(queryCategory) { 
      //categories array is from the Product model schema
      products = await Product.find({
        categories:{
          $in:[queryCategory],
        },
      })
    } else {
      products = await Product.find()
    }

    res.status(200).json(products)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router