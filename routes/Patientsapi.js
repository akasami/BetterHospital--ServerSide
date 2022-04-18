const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const Patient = require('../models/patients');
const patient_user = require('../models/patientuser')
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();


router.route('/addpatient').post(jsonparser,function(req,res){
    const patientdata = new Patient({
     _id: new mongoose.Types.ObjectId(),
     firstname:req.body.firstname,
     lastname:req.body.lastname,
     CNIC:req.body.CNIC,
     phone:req.body.phone,
     age:req.body.age,
     gender:req.body.gender,
     dob: new Date(parseInt(req.body.dob.year),parseInt(req.body.dob.month),parseInt(req.body.dob.day)),     
     admit:False
    })
    
    patientdata.save().then((result)=>{
             res.send("Success");
             console.warn(result);
    })
 })
 
router.route('/removepatient/:id').delete(function(req,res){
    
    Patient.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{console.warn(err)})
        
})
router.route("/search/:firstname").get(function(req,res){
    var regex = new RegExp(req.params.firstname,'i');
    Patient.find({firstname:regex}).then((result)=>{
        res.status(200).json(result)
    })
})

module.exports = router;