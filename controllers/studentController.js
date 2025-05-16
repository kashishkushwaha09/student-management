const db=require('../utils/db-connection');
const Student=require('../models/studentModel');
const IdentityCard=require('../models/identityCardModel');
const Department=require('../models/departmentModel');
// Retrieve all users from the database.
const retrieveEntries=(req,res)=>{
    const readQuery=`SELECT * FROM students`;
    db.execute(readQuery,(err,results)=>{
        if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        db.end();
        return;
    }
     res.status(200).send(results);
    })
}
// Add a new user.
const addEntries=async (req,res)=>{
    try {
     const {email,name,age,departmentId}=req.body;
     const student=await Student.create({
        name,email,age,DepartmentId:departmentId
     }) 
     res.status(201).send(`student with name ${name} successfully created`);
    } catch (error) {
        console.log(error);
         res.status(500).send("Server error:-unable to make an entry");
        
    }

}
const addDepartment=async (req,res)=>{
    try {
     const {name}=req.body;
     const department=await Department.create({
        name
     }) 
     res.status(201).send(`department with name ${name} successfully created`);
    } catch (error) {
        console.log(error);
         res.status(500).send("Server error:-unable to make an entry");
        
    }

}
const addingValuesToStudentAndIdentityCardTable=async (req,res)=>{
    try {
        
        const student=await Student.create(req.body.student);
        const identityCard=await IdentityCard.create({
           ...req.body.identityCard,
            StudentId:student.id
        })
        res.status(201).json({student,identityCard});
    } catch (error) {
        console.log(error);
         res.status(500).send("Server error:-unable to make an entry");
        
    }
}
const updateEntries=async (req,res)=>{
 try {
    const {id}=req.params;
    const {name,email}=req.body;
    const student=await Student.findByPk(id);
    if(!student){
        res.status(404).send("student not found");
    }
    student.name=name;
    await student.save();
    res.status(200).send("student has been updated");
 } catch (error) {
             console.log(err);
        res.status(500).send(err.message);
 }
    
}
const deleteEntry=async (req,res)=>{
    try {
        const {id}=req.params; 
        const student=await Student.destroy({
            where:{
                id:id
            }
        })
        if(!student){
            res.status(404).send('User not found');
        }
        res.status(200).send(`student with id ${id} is deleted`);
    } catch (err) {
            console.log(err);
        res.status(500).send(err.message);
    }
   
   
}

module.exports={retrieveEntries,addEntries,updateEntries,deleteEntry,addingValuesToStudentAndIdentityCardTable,addDepartment};