const express = require('express');
const router = express.Router();
const validator = require("email-validator");
const User = require("../models/User");

router.post('/login',async(req,res) => {
    try{
        const valid = validator.validate(req.body.email);
        if (!valid) {
            throw new Error("Invalid email, please try again!");
        }
        const user = await User.findOne({ email: req.body.email }).select(
            "+password"
        );
        if (!user) {
            throw new Error("User with this email does not exist");
        }

        if(user.password !== req.body.password){
            throw new Error("Invalid Password");
        }

        user.password = null;

        res.status(200).json({
            message: "success",
            data:user
        });
    } 
    catch (error) {
        res.status(400).json({
            message: "fail",
            error: error.message,
        });
    }
});

router.post('/register',async(req,res) => {
    try {
        const firstName =  req.body.firstName;
        const lastName = req.body.lastName;
        const address =  req.body.address;
        const city = req.body.city;
        const district = req.body.district;
        const email = req.body.email;
        const password = req.body.password;

        const valid = validator.validate(email);

        if (!valid) {
            throw new Error("Invalid email, please try again!");
        }

        const user = await User.findOne({ email });
      
        if (user) {
            throw new Error("User with this email exists");
        }

        if(!firstName || !lastName || !address || !city || !district || !email || !password) {
            throw new Error("Empty Fields");
        }

        await User.create(req.body).then( 
            (user) => {
                user.password = null;
                res.json({
                    message:"success",
                    data:user
                });
            }
        )

    }  catch (error) {
        res.status(400).json({
            message: "fail",
            error: error.message,
        });
    }
})

module.exports = router;