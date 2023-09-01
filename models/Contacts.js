const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, "You must have a name..."]
    },
    email:{
        type: String,
        required:[true, "You must have a email number for contact you later..."]
    },
    subject:{
        type: String,
        required:[true, "Subject is most important to identify to your mind..."]
    },
    message:{
        type: String,
        required:[true, "what you want, Freinds..!"]
    }
});

module.exports = mongoose.model('Contacts', ContactSchema);