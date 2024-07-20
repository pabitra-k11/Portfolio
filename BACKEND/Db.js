const mongoose=require('mongoose');

const DB_URL="mongodb://localhost:27017/portfolio";
main().then(()=>{
    console.log(" connected successfully!");
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect(DB_URL);
}

module.exports=main;