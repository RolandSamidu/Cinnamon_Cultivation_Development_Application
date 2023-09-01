const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

//save feedback details
router.post('/feedback/save',(req,res)=>{
  let newFeedback = new Feedback(req.body);

  newFeedback.save((err) =>{
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

//get feedback details
router.get('/feedbacks',(req,res) => {
    Feedback.find().exec((err,Feedback) =>{
      if(err){
        return res.status(400).json({
          error:err
        });
      }
      return res.status(200).json({
        success:true,
        existingFeedbacks:Feedbacks
      });
    });
});



//delete feedback details
router.delete('/feedbacks/delete/:id',(req,res) => {
  Feedback.findByIdAndDelete(req.params.id).exec((err,deletedFeedback)=>{
    if(err) return res.status(400).json({
      message:"Delete unsuccesfull",err
    });

    return res.json({
      message:"Delete Successfull",deletedFeedback
    });
  });
});
    
module.exports = router;