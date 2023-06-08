const express = require("express")
const{Datamodel} = require("../modal/data.modal")
const {result} = require("../middleware/result")

const route = express();
route.get("/",async(req,res)=>{
    try {
        let data = await Datamodel.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(`error: ${error}`)
        
    }

})
route.post("/",result,async(req,res)=>{
    try {
       
        const data = await Datamodel.create(req.body)
        res.status(200).send({"msg":"data added successfully", data})
        
    } catch (error) {
        res.status(404).send(`error: ${error}`)
        
    }

})
route.patch("/",result,async(req,res)=>{
    let{name} = req.body;
    try {
        let data = await Datamodel.findOneAndUpdate({name},req.body)
        if(data){
            res.status(200).send({"msg":"data added successfully", data})

        }
        else{
            res.status(200).send({"msg":"data not found", data})
            
        }
       
        
    } catch (error) {
        res.status(404).send(`error: ${error}`)
        
    }
})
route.delete("/",async(req,res)=>{
    console.log(req.body)
    try {
        let data = await Datamodel.findOneAndDelete(req.body)
        res.status(200).send({"msg":"succesfully deleted",data})
        
    } catch (error) {
        res.status(404).send(`error: ${error}`)
        
    }
})
module.exports = {route}