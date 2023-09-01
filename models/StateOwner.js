const mongoose = require('mongoose');//import mongoose for module

const stateOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
  },
  telephoneNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  annualYeild: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('StateOwner', stateOwnerSchema);
