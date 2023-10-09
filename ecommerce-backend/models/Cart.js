const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId : {type: String, require:true, unique:true},
    products : {type: Array, require: true},
    quantity : {type: Number, require:true},
    total: {type: Number, require: true, default: 0}
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Cart", cartSchema);