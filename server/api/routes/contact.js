const express = require('express');

const mongoose = require('mongoose');
const app = express();
const Contact=require('../model/contact');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

////////////Developer/////////////////////////

router.post('/cadd',function(req,res){
    const acity=req.body.acity
    const eemail=req.body.eemail
    const fname=req.body.fname
    const taddress=req.body.taddress
    new contact({
        taddress:taddress,
        eemail:eemail,
        fname:fname,
        acity:acity,
        
    })
    .save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let ContactUpdate = {
        _id :id,
        lname : req.body.lname,
        eemail : req.body.eemail,
        acity : req.body.acity,
        taddress : req.body.taddress
    };
    User.findOneAndUpdate({_id:id}, ContactUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})
module.exports = router;