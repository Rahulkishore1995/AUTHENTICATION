const express = require("express")

const router = express.Router();
const authenticate= require("../middlewares/authenticate");
const Postmodel =require("../models/post.models");
 
router.post("", authenticate, async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const post = await Postmodel.create(req.body)
        return res.status(200).send(post)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.get("", async (req, res) => {
    try{
        const post = await Postmodel.find()
        return res.status(200).send(post)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.patch("/:id",authenticate,async(req,res)=>{
   try{
       const  post= await Postmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
      return res.status(200).send(post);
   }
   catch(err){
      return res.status(400).send(err);
   }
})

router.delete("./id",authenticate,async(req,res)=>{
    
    try {
        const post = await Postmodel.findByIdAndDelete(req.params.id)
        return res.status(200).send({post:post});
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }

})
 
module.exports = router;