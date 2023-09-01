const express = require('express');
const Contacts = require('../models/Contacts');

const router = express.Router();


// Send Contact details to the DB

router.post('/Send_contact_details',(req,res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const newContacts = new Contacts({
        name,
        email,
        subject,
        message
    });

    newContacts.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Contact Details Send to Successfully"
        });
    });
});


// Get Contact's Details

router.get('/all_contact_details',(req,res)=>{

    Contacts.find().exec((err, Contacts) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingContacts: Contacts
        });
    });
});


// Get a Specific Information of One by one 

router.get('/contact/:id', (req,res) => {

    let conId = req.params.id;

    Contacts.findOne(conId,(err,Contact) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            Contact
        });
    });
});


//Update Contact's details

router.patch('/update_contact_details/:id', (req,res)=>{

    Contacts.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, Contacts) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully.",
                existingContacts: Contacts
            });
        }
    );
});


//Delete contact details in the list

router.delete('/delete/:id', (req,res)=>{

    Contacts.findByIdAndRemove(req.params.id).exec((err, deletedContact)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessfully.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successfully.",
            deletedContact
        });
    });
});


module.exports = router;