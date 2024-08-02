
const dbConnect=require('./db');
const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const path =require('path');
const session=require("express-session");
const flash=require("connect-flash");
const app=express();
dbConnect();

const sessionOptions={
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60+1000,
        maxAge:7*24*60*60+1000,
        httpOnly:true,
    }
}

app.set("view engien","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    next();
})

//create schema
const userSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
        

    },
    msg:{
        type:String,
        required:true
    }

});

//create model
const Client=mongoose.model('Client',userSchema);

app.get("/contact",(req,res)=>{
    res.send("hello world");
});

app.post("/contact",async (req,res)=>{

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

app.listen(8080,()=>{
    console.log("server is listening on port:8080");
});

// module.exports=Client;