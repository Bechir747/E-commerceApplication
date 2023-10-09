const {
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
    GetAllProduct,
    GetProduct,
  } = require("../controllers/ProductController");

const {verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, CreateProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, UpdateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, DeleteProduct);

//GET PRODUCT
router.get("/find/:id",GetProduct);

//GET ALL PRODUCTS
router.get("/", GetAllProduct);

module.exports = router;