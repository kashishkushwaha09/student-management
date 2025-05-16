const express=require('express');
const router=express.Router();
const studentController=require('../controllers/studentController');
router.post('/add',studentController.addDepartment);
module.exports=router;