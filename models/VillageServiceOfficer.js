const mongoose = require('mongoose');

const VillageServiceOfficerSchema = mongoose.Schema({
    vsoID: {
        type: String,
        required: [true, 'must be complete']
    },
    vso_FullName: {
        type: String,
        required: [true, 'must be complete']
    },
    vso_Email: {
        type: String,
        required: [true, 'must be complete'],
        unique: true
    },
    vso_PhoneNumber: {
        type: String,
        maxlength: 10,
        minLength: 9,
        required: [true, 'must be complete']
    },
    vso_WorkArea: {
        type: String,
        required: [true, 'must be complete']
    },
    vso_District: {
        type: String,
        required: [true, 'must be complete']
    },
    vso_Province: {
        type: String,
        required: [true, 'must be complete']
    }
});

module.exports = mongoose.model('VSOs', VillageServiceOfficerSchema);