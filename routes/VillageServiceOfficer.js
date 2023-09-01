const express = require('express');
const VSOs = require('../models/VillageServiceOfficer');

const router = express.Router();


// Registered New VSO to the system

router.post('/registered_new_VSOs', (req,res) => {

    const vsoID = req.body.vsoID;
    const vso_FullName = req.body.vso_FullName;
    const vso_Email = req.body.vso_Email;
    const vso_PhoneNumber = req.body.vso_PhoneNumber;
    const vso_WorkArea = req.body.vso_WorkArea;
    const vso_District = req.body.vso_District;
    const vso_Province = req.body.vso_Province;
    
    const newVSO = new VSOs({
        vsoID,
        vso_FullName,
        vso_Email,
        vso_PhoneNumber,
        vso_WorkArea,
        vso_District,
        vso_Province
    });
    
    newVSO.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(400).json({
            success:"Registered successfully"
        });
    });
});


// Get VSO's Ddetails

router.get('/all_vso_details', (req,res) => {

    VSOs.find().exec((err, VSOs) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingVSOs: VSOs
        });
    });
});


// Get a specific Information of one by one

router.get('/:id', (req,res) => {

    let vsoID = req.params.id;

    VSOs.findById(vsoID,(err,VSO) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            VSO
        });
    });
});


// Update VSO's details

router.patch('/update_existing_details/:id', (req,res)=>{

    VSOs.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, VSOs) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully.",
                existingVSOs: VSOs
            });
        }
    );
});


// Delete VSO's details

router.delete('/delete/:id', (req,res) => {

    VSOs.findByIdAndRemove(req.params.id).exec((err, deleteVSO) => {
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessfully.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successfully.",
            deleteVSO
        });
    });
});


module.exports = router;