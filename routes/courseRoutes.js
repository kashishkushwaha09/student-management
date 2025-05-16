const express=require('express');
const router=express.Router();
const courseController=require('../controllers/courseController');
router.post('/add',courseController.addCourse);
router.get('/addStudentsToCourses',courseController.addStudentsToCourses);
module.exports=router;