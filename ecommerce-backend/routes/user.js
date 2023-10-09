const {
    UpdateUser,
    DeleteUser,
    GetAllUser,
    GetUser,
    GetUserStatus,
  } = require("../controllers/UserController");

const {verifyTokenAndAdmin,verifyTokenAndAuth,verifyToken} = require("./verifyToken")
const router = require("express").Router();

//UPDATE
router.put("/:id",verifyTokenAndAuth, UpdateUser);

//DELETE

router.delete("/:id",verifyTokenAndAdmin, DeleteUser)

//GET USER
router.get("/find/:id",verifyTokenAndAuth,  GetUser)

//GET ALLUSERS
router.get("/",verifyTokenAndAdmin,GetAllUser )

//GET USER STATS

router.get("/stats",verifyTokenAndAdmin, GetUserStatus);  



module.exports = router;