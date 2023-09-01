const express = require('express');
const Banks = require('../models/Banks');

const router = express.Router();


// Registered New Bank to the System

router.post('/registered_new_bank',(req,res) => {

    const bankRegID = req.body.bankRegID;
    const bankName = req.body.bankName;
    const mainBranchVenue = req.body.mainBranchVenue;
    const numOfBranches = Number(req.body.numOfBranches);
    const bankMobile = req.body.bankMobile;
    const bankEmail = req.body.bankEmail;
    const historyOfBank = req.body.historyOfBank;

    const newBank = new Banks({
        bankRegID,
        bankName,
        mainBranchVenue,
        numOfBranches,
        bankMobile,
        bankEmail,
        historyOfBank
    });

    newBank.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Bank Registered Successfully"
        });
    });
});


// Get Banks's Details

router.get('/all_bank_details',(req,res)=>{

    Banks.find().exec((err, Banks)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingBanks: Banks
        });
    });
});


// Get a Specific Information of One by One 

router.get('/:id', (req,res) => {

    let bankRegID = req.params.id;

    Banks.findById(bankRegID,(err,Bank) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            Bank
        });
    });
});


//Update Bank's details

router.patch('/update_existing_details/:id', (req,res)=>{

    Banks.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, Banks) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully.",
                existingBanks: Banks
            });
        }
    );
});


//Delete Bank Details in the list

router.delete('/delete/:id', (req,res)=>{

    Banks.findByIdAndRemove(req.params.id).exec((err, deletedBank)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessfully.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successfully.",
            deletedBank
        });
    });
});


module.exports = router;