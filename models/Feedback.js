
const mongoose = require('mongoose');//import mongoose for module

const feedbackSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('Feedback', feedbackSchema);

