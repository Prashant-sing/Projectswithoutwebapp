const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")

//   <------------------ Creating the data ------------------>
router.post("/mens", async (req, res) =>{
    try{
        const addingMensRecords = new MensRanking(req.body)//req.body 
        //would give us the body part of the request coming from the
        //POSTMAN
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(err){
        res.status(400).send(err);
    }
})


//  <------------------ Reading the data ------------------>
router.get("/mens", async (req, res) =>{
    try{
        const getMens = await MensRanking.find({}).sort(
            {"ranking": 1});//Now data will be sorted according to ranks
        //we will get to see sorted data only at API not in the database
        console.log(getMens);
        res.send(getMens);
    }catch(err){
        res.status(400).send(err);
    }
})


//  <----------- Reading the data Individually using id ---------->
router.get("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
        console.log(getMen);
        res.send(getMen);
    }catch(err){
        res.status(400).send(err);
    }
})


//  <----------- Updating the data Individually using id ---------->
router.patch("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        console.log(getMen);
        res.send(getMen);
    }catch(err){
        res.status(500).send(err);// 500 -> server relate error
    }
})


//  <----------- Deleting the data Individually using id ---------->
router.delete("/mens/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        console.log(getMen);
        res.send(getMen);
    }catch(err){
        res.status(500).send(err);// 500 -> server relate error
    }
})
module.exports = router;