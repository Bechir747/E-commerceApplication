const Cart = require("../models/Cart");


//CREATE

module.exports.CreateCart = async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch (err) { 
        res.status(500).json(err);
}
};

//UPDATE
module.exports.UpdateCart =async (req, res) => {
    try {
    const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
};
//UPDATE BY userId
module.exports.UpdateCartByUserId =async (req, res) => {
     try {
    const userId = req.query.userId; // Extract userId from query parameter
    const updatedCart = await Cart.findOneAndUpdate(
      { userId },
      { $set: req.body }, // Update with the request body data
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: "Cart not found for the given userId" });
    }

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE
module.exports.DeleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
};

//GET USER CART
module.exports.GetUsersCart = async (req, res) => {
    try {
        const userId = req.query.userId;
        const cart = await Cart.findOne({ userId });
    
        if (!cart) {
          return res.status(404).json({ message: "Cart not found for the given userId" });
        }
    
        res.status(200).json(cart);
      } catch (error) {
        res.status(500).json(error);
      }
};

// //GET ALL

module.exports.GetAllCart =async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
};
