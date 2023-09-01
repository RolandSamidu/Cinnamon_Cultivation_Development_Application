const express = require('express');
const Loans = require('../models/LoanApplyForm');
const Banks = require('../models/Banks');

const router = express.Router();

router.post('/Apply_Loan', (req,res) => {

    const formID = req.body.formID;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const birthdate = req.body.birthdate;
    const estateOwnerMobile = req.body.estateOwnerMobile;
    const estateOwnerEmail = req.body.estateOwnerEmail;
    const typeOfID = req.body.typeOfID;
    const idNumber = req.body.idNumber;
    const monthlyIncome = req.body.monthlyIncome;
    const propetyVenue = req.body.propetyVenue;
    const propertyOwnship = req.body.propertyOwnship;
    const maritalStatus = req.body.maritalStatus;
    const jobExperience = req.body.jobExperience;
    const yieldAddress = req.body.yieldAddress;
    const bankName = req.body.bankName;
    const branchName = req.body.branchName;
    const accountNumber = req.body.accountNumber;
    const accountType = req.body.accountType;
    const purposeOFPersonalLoan = req.body.purposeOFPersonalLoan;
    const loanAmount = req.body.loanAmount;
    const guranterName = req.body.guranterName;
    const guranterPhoneNumber = req.body.guranterPhoneNumber;
    const guranterEmailAddress = req.body.guranterEmailAddress;
    const guranterPlaceOfWork = req.body.guranterPlaceOfWork;
    const applicant_Signature = req.body.applicant_Signature;
    const villageServer_Signature = req.body.villageServer_Signature;

    const newLoan = new Loans({
        formID,
        firstName,
        lastName,
        birthdate,
        estateOwnerMobile,
        estateOwnerEmail,
        typeOfID,
        idNumber,
        monthlyIncome,
        propetyVenue,
        propertyOwnship,
        maritalStatus,
        jobExperience,
        yieldAddress,
        bankName,
        branchName,
        accountNumber,
        accountType,
        purposeOFPersonalLoan,
        loanAmount,
        guranterName,
        guranterPhoneNumber,
        guranterEmailAddress,
        guranterPlaceOfWork,
        applicant_Signature,
        villageServer_Signature
    });
    
    newLoan.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Loan Apply Successfully...!"
        });
    });
});


// Get Loan apply's Details

router.get('/loan_applications', (req,res)=>{

    Loans.find().exec((err, Loans)=>{
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingLoans: Loans
        });
    });
});


// Get a Specific Information of One by One

router.get('/apply_loan_details/:id', (req,res)=>{

    let formID = req.params.id;

    Banks.findById(formID, (err, Loan) =>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            });
        }
        return res.status(200).json({
            success:true,
            Loan
        });
    });
});


// Update Loan's Details

router.patch('/update_loans_data/:id', (req,res)=>{

    Loans.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, Loans) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully.",
                existingLoans: Loans
            });
        }
    );
});


// Delete Loan Aplicants Details

router.delete('/delete/:id', (req,res)=>{

    Banks.findByIdAndRemove(req.params.id).exec((err, deleteLoan)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Successfully.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successfully.",
            deleteLoan
        });
    });
});

module.exports = router;