const express = require("express");
const prouter = express.Router();
const product=require("../models/Product")

//add new product
prouter.post("/addproduct", async (req, res) => {
    const { title,price,description,photo,category } = req.body;
    try {
      const newproduct = new product({...req.body});
      let result = await newproduct.save();
      res.status(200).send({ result: result, msg: "product added" });
    } catch (error) {
      res.status(500).send("product not added");
    }
  });
  //update product..
  module.exports = prouter;

  
   //get all products
 //method get
 //path http://localhost:4000/product

prouter.get("/getproducts",async(req, res) => {
  try{
    let result=await product.find()
    res.send({result:result, msg:"all products"})
  }
  catch(error){
    res.send("error")
  }
});

//get one product
//method get
//path http://localhost:4000/product/:id
//params _id
// router.get('/:id', async(req, res) => {

prouter.get("/getoneproduct/:id", async(req, res) => {
 try{
   let result=await product.findOne({_id:req.params.id})
   res.send({result:result, msg:"productfound"})
 }
 catch(error){
   res.send("error")
 }
});

//delete one product
//method delete
//path http://localhost:4000/product/:id
//params _id
// router.delete('/:id', async(req, res) => {
  prouter.delete('/deleteoneproduct/:id',async(req,res)=>{
 try{
   let result=await product.deleteOne({_id:req.params.id})
  result.n? res.send({result:result, msg:"product deleted"}):res.send({result:result,msg:'already deleted'})
 }
 catch(error){
   res.send("error")
 }
  });


//update one product
//method put
//path http://localhost:4000/product/:id
//params _id and body
// router.put('/:id', async(req, res) => {
prouter.put=('/updateoneproduct/:id',async(req,res)=>{
 try{
   let result=await product.updateOne({_id:req.params.id},{$set:{...req.body}})
  res.send({result:result, msg:"product updated"})
 }
 catch(error){
   res.send("error")
 }
});




