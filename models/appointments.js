const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
let AppointmentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    doctorid: {type:String ,required:true},
    patientid:{type:String,required:true},
    status:{type:String},
    date:{type:String,required:true},
    starttime:{type:String,required:true},
    endtime:{type:String,required:true}
},{
    versionKey: false // You should be aware of the outcome after set to false 
});  
module.exports = mongoose.model('appointments',AppointmentSchema);