const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title : {type: String, require:true, unique:true},
    desc : {type: String, require:true},
    img : {type: String, require:true},
    categories : {type: Array},
    size : {type: Array},
    color : {type: Array},
    price : {type: Number, required:true},
    inStock: {type: Boolean, default: true}
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Prduct", productSchema);