
const {
    CreateCart,
    UpdateCart,
    DeleteCart,
    GetAllCart,
    GetUsersCart,
    UpdateCartByUserId
  } = require("../controllers/CartController");

const {verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();

//CREATE

router.post("/",CreateCart);


//UPDATE BY userId
router.put("/", UpdateCartByUserId);

//DELETE
router.delete("/:id", DeleteCart);

//GET USER CART
router.get("/find/", GetUsersCart);

// //GET ALL
router.get("/", GetAllCart);

module.exports = router;