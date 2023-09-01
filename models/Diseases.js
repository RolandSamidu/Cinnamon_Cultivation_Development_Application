const mongoose = require('mongoose');//import mongoose for module

const diseasesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reasons: {
    type: String,
    required: true,
  },
  treatments: {
    type: String,
    required: true,
  },
  youtube_links: {
    type: [String],
    validate: {
      //validation for youtube links
      validator: function(v) {
        return /^https?:\/\/(www\.)?youtube\.com\/(watch\?v=|embed\/|v\/)?[\w-]{11}$/;
        
      },
      message: props => `${props.value} is not a valid YouTube link!`
    }
  },
});

module.exports = mongoose.model('Diseases', diseasesSchema);

