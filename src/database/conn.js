//connection from the database
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/olympics",{
useCreateIndex:true,    //to handle deprication warning
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log("Connection successful");
}).catch(()=>{
    console.log("No connection");
})