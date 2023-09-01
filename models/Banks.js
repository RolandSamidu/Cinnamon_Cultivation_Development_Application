const mongoose = require('mongoose');

const bankSchema = mongoose.Schema({
   bankRegID:{
       type: String,
       required:[true, 'A bank must have a Unique ID']
   },
   bankName:{
       type: String,
       required:[true, 'A bank must have a last name']
   },
   mainBranchVenue:{
       type: String,
       required:[true, 'A bank must have an address']
   },
   numOfBranches:{
       type: Number,
       required:[true, 'Shoud include number of branches']
   },
   bankMobile: {
    type: String,
    maxlength: 10,
    minlength: 9,
    required: [true, "A bank must have contact number"],
   },
   bankEmail:{
       type: String,
       required:[true, 'A Bank Loan Management must have an email address for the log to the system'],
       unique: true
   },
   historyOfBank:{
       type: String,
       required:[true, 'Peoples who are sicking for take a loan want to know about bbank history.']
   }
});

module.exports =  mongoose.model('Banks', bankSchema);