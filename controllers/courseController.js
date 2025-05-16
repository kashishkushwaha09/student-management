const Course= require('../models/courseModel');
const Student= require('../models/studentModel');
const addCourse=async (req,res)=>{
    try {
        const {name}=req.body;
        const course=await Course.create({name})
        res.status(201).json({course});
    } catch (error) {
        console.log(error);
         res.status(500).json({error:error.message});
        
    }
}
const addStudentsToCourses=async (req,res)=>{    
    // {
    //     "studentId":1,
    //     "courseIds":[1,2]
    // }
    try {
        const {studentId,courseIds}=req.body;
        const student=await Student.findByPk(studentId);
        const course=await Course.findAll({
            where:{
                id:courseIds
            }
        });
        await student.addCourse(course);
        const updatedStudent=await Student.findByPk(studentId,{
            include:Course
        });
        res.status(200).json({updatedStudent});
    } catch (error) {
        console.log(error);
         res.status(500).json({error:error.message});
        
    }
}
module.exports={
    addCourse,
    addStudentsToCourses
}