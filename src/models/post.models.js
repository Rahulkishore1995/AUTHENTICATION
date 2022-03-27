const mongoose = require("mongoose")
// const bcrypt = require("bcrypt");
const postSchema = new mongoose.Schema({
    titel: {type : String, required : true},
    user_id : {
          type : mongoose.Schema.Types.ObjectId,
          ref:"users",
          required : true}
},{
    timestamps : true,
    versionKey : false,
})


const Postmodel = mongoose.model("post", postSchema)

module.exports = Postmodel;