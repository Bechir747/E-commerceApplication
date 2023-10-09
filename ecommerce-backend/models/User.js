const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName : {type: String, require:true},
    lastName : {type: String, require:true},
    username : {type: String, require:true, unique:true},
    email : {type: String, require:true, unique:true},
    password : {type: String, require:true},
    isAdmin : {type: Boolean, default:false}
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);