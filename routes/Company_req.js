const express = require('express');
const CompanyReqs = require("../models/Company_req");

const router = express.Router();


//save company requirement 

router.post('/company/save', (req,res) => {

    const c_req_ID = req.body.c_req_ID;
    const c_name = req.body.c_name;
    const c_location = req.body.c_location;
    const requirement = req.body.requirement;
    const cinnamon_grade = req.body.cinnamon_grade;
    const companyMobile = req.body.companyMobile;
    const date = req.body.date;

    const newCompany_req = new CompanyReqs({
        c_req_ID,
        c_name,
        c_location,
        requirement,
        cinnamon_grade,
        companyMobile,
        date
    });

    newCompany_req.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Company requirement is saved."
        });
    });
});


//Get company requirements

router.get('/company/view', (req, res)=>{
    CompanyReqs.find().exec((err,CompanyReqs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCompanyReqs: CompanyReqs
        });
    });
});


// Get a Specific Information of One by One 

router.get('company/:id', (req,res) => {

    let c_req_ID = req.params.id;

    CompanyReqs.findById(c_req_ID,(err,CompanyReq) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            CompanyReq
        });
    });
});


//Update company requirements
router.patch('/company/update/:id',(req,res)=>{

    CompanyReqs.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,CompanyReqs)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated company requirement successfully.",
                existingCompanyReqs: CompanyReqs 
            });
        }
    );
});


//Delete company requirement

router.delete('/company/delete/:id',(req,res)=>{
    CompanyReqs.findByIdAndRemove(req.params.id).exec((err, deleteCompanyReq)=>{
        
        if(err){
            return res.status(400).json({
                message:"Deleted Unsuccessful",
                err
            });
        } 
        return res.status(200).json({
            message:"deleted successfully.",
            deleteCompanyReq
        });
    });
}); 

module.exports = router;