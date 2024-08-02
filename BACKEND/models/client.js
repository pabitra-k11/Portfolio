const mongoose=require("mongoose");
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

module.exports=Client;