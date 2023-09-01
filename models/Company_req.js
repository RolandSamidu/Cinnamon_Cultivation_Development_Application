const mongoose = require('mongoose');

const companySchema = mongoose.Schema({

    c_req_ID:{
        type :String,
        required:true
    },
    c_name:{
        type :String,
        required :true
    },
    c_location:{
        type :String,
        required :true
    },
    requirement:{
        type :String,
        required :true
    },
    cinnamon_grade:{
        type :String
    },
    companyMobile: {
        type: String,
        maxlength: 10,
        minlength: 9,
        required: [true, "A Company must have contact number"]
    },
    date:{
        type :String,
        required :true
    }
});

module.exports = mongoose.model('companyRequirements',companySchema);