const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    firstName:{type: String, require:true},
    lastName:{type: String, require:true},
    address:{type: String, require:true},
    phoneNumber:{type: Number, require:true},
    region:{type: String, require:true},
    city:{type: String, require:true},
    deliveryMeth:{type: String, require:true},
    paymentMeth:{type: String, require:true},
    amount: {type: Number, require:true},
    products: [
        {
          productId: {
            type: String,
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
      status: { type: String, default: "pending" },
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Order", orderSchema);