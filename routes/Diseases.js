const express = require('express');
const router = express.Router();
const Diseases = require('../models/Diseases');

//save diseases details
router.post('/diseases/save',(req,res)=>{
  let newDiseases = new Diseases(req.body);

  newDiseases.save((err) =>{
    if(err){
      return res.status(400).json({
        error:err
      });
    }
    return res.status(200).json({
      success:"Saves Successfully"
    });
});

});

//get diseases details
router.get('/diseases',(req,res) => {
    Diseases.find().exec((err,Diseases) =>{
      if(err){
        return res.status(400).json({
          error:err
        });
      }
      return res.status(200).json({
        success:true,
        existingPosts:Diseases
      });
    });
});

//update diseases details
router.put('/diseases/update/:id',(req,res)=>{
  Diseases.findByIdAndUpdate(
    req.params.id,
    {
      $set:req.body
    },
    (err,Diseases)=>{
      if(err){
        return res.status(400).json({error:err});
      }

      return res.status(200).json({
        success:"Updated Successfully."
      });
    }
  );
});

//delete diseases details
router.delete('/diseases/delete/:id',(req,res) => {
  Diseases.findByIdAndDelete(req.params.id).exec((err,deletedDisease)=>{
    if(err) return res.status(400).json({
      message:"Delete unsuccesfull",err
    });

    return res.json({
      message:"Delete Successfull",deletedDisease
    });
  });
});
    
module.exports = router;