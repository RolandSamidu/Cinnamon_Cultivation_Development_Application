const mongoose = require('mongoose');

const loanApplyFormSchema = mongoose.Schema({

    // General Information

    formID: {
        type: String,
        required: [true, 'A Loan Apply Form must have a Unique ID']
    },
    firstName: {
        type: String,
        required: [true, 'Required first name']
    },
    lastName: {
        type: String,
        required: [true, 'Required last name']
    },
    birthdate: {
        type: String,
        required: [true, 'Must be required Birthdate for clculate your age']
    },
    estateOwnerMobile: {
        type: String,
        maxlength: 10,
        minlength: 9,
        required: [true, "Your Phone Number want to contact you later"]
    },
    estateOwnerEmail: {
        type: String,
        required: [true, 'A Bank Loan Management must have an email address for the log to the system']
    },
    typeOfID: {
        type: String,
        required: [true, 'You want add your ID type']
    },
    idNumber: {
        type: String,
        required: [true, 'required to ID Number']
    },
    monthlyIncome: {
        type: Number,
        required:[true, 'must be complete']
    },
    propetyVenue: {
        type: String,
        required: [true, 'Must have a Address']
    },
    propertyOwnship: {
        type: String,
        required: [true, 'Must assign Property Ownship']
    },
    maritalStatus: {
        type: String,
        required:[true, 'feild is required']
    },
    jobExperience: {
        type: Number,
        required:[true, 'you must comlete this feild']
    },
    yieldAddress: {
        type: String,
        required:[true, 'you must have a yieldAddress']
    },

    // Financial References

    bankName: {
        type: String,
        required:[true, 'must be complete']
    },
    branchName: {
        type: String,
        required:[true, 'must be complete']
    },
    accountNumber: {
        type: String,
        required:[true, 'must be complete']
    },
    accountType: {
        type: String,
        required:[true, 'must be complete']
    },

    // Loan Details

    purposeOFPersonalLoan: {
        type: String,
        required:[true, 'must be complete']
    },
    loanAmount: {
        type: Number,
        required:[true, 'must be complete']
    },

    // Liabilities

    guranterName: {
        type: String,
        required:[true, 'must be complete']
    },
    guranterPhoneNumber: {
        type: String,
        required:[true, 'must be complete']
    },
    guranterEmailAddress: {
        type: String,
        required:[true, 'must be complete']
    },
    guranterPlaceOfWork: {
        type: String,
        required:[true, 'must be complete']
    }, 

    // Signatures

    applicant_Signature: {
        type: Boolean,
        required:[true, 'must be complete']
    },
    villageServer_Signature: {
        type: Boolean,
        required:[true, 'must be complete']
    }
});

module.exports = mongoose.model('Loans', loanApplyFormSchema);