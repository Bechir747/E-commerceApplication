
const {
    CreateOrder,
    UpdateOrder,
    DeleteOrder,
    GetAllOrder,
    GetUsersOrder,
    GetMonthlyIncome,
  } = require("../controllers/OrderController");

  const {verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", CreateOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin,UpdateOrder );

//DELETE
router.delete("/:id", verifyTokenAndAdmin, DeleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuth,GetUsersOrder );

//GET ALL
router.get("/",verifyTokenAndAdmin,GetAllOrder);

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, GetMonthlyIncome);

module.exports = router;