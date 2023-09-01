const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   firstName:{
       type: String,
       required:[true, 'A user must have a first name']
   },
   lastName:{
       type: String,
       required:[true, 'A user must have a last name']
   },
   address:{
       type: String,
       required:[true, 'A user must have an address']
   },
   city:{
       type: String,
       required:[true, 'A user must have a city']
   },
   district:{
       type: String,
       required:[true, 'A user must have a district'],       
   },
   userMobile: {
    type: String,
    maxlength: 10,
    minlength: 9,
    required: [true, "A user must have phone number"],
  },
   email:{
       type: String,
       required:[true, 'A user must have an email address'],
       unique: true
   },
   password:{
       type: String,
       required:[true, 'A user must have a password']
   },   
   type: {
        type: String,
        default: 'user',
   }
});

module.exports =  mongoose.model('Users', userSchema);