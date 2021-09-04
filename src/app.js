const express=require('express');
require("../src/database/conn");
const MensRanking=require("../src/models/mens");
const app=express();
const port=process.env.PORT||3000;
app.use(express.json());
//handling post request 
app.post("/mens",async(req,res)=>{
    try{
      const adddingMensRecords=new MensRanking(req.body);
      console.log(req.body);
       const insertMens= await adddingMensRecords.save(); 
       res.status(201).send(insertMens); 


    }catch(e){
res.status(400).send(e);
    }
})
//handling the get request
app.get("/mens", async(req,res)=>{
    try{
      
       const getMens=  await MensRanking.find({}).sort({"ranking":1});
           
     res.send(getMens);

    }catch(e){
res.status(400).send(e);
    }
})
//retreving an spcific data using findById
//now handling update request...using Patch
//deleting the request
app.delete("/mens/:id", async(req,res)=>{
    try{
       
       const getMens=  await MensRanking.findByIdAndDelete(req.params.id);
           
     res.send(getMens);

    }catch(e){
res.status(400).send(e);
    }
})
 app.listen(port,()=>{
     console.log(`connection is live at port.${port}`);
 })