const express=require("express");
const Client = require("../models/client");
const router=express.Router();

//contact route
router.get("/",(req,res)=>{
    res.send("hello world");
});

//post route
router.post("/",async (req,res)=>{

    try {
        let{fname,email,msg}=req.body;
        let newValue=new Client({fname,email,msg});
       let doc=  await newValue.save();
      req.flash("success","send successfully!");
      console.log(doc);
      res.render("./User.ejs",{doc});
    } catch (error) {
        console.log("something error occured!",error);
    }

    
});

module.exports=router;