const express = require('express')
const mongoose = require('mongoose')


const dataSchema = mongoose.Schema({
    name:{type:String,required:true,unique:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true},
    pincode:{type:Number,required:true},
    sat_score:{type:Number,required:true},
    passed:{type:String,required:true}
})

const Datamodel= mongoose.model("Alldata",dataSchema,"Alldatas");
module.exports = {Datamodel}