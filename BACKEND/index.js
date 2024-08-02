
const dbConnect=require('./db');
const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const path =require('path');
const session=require("express-session");
const flash=require("connect-flash");
const contact=require("./routes/client.js");
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
});

app.use("/contact",contact);

app.listen(8080,()=>{
    console.log("server is listening on port:8080");
});

