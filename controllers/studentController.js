const db=require('../utils/db-connection');
const Student=require('../models/studentModel');

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
     const {email,name,age}=req.body;
     const student=await Student.create({
        name,email,age
     }) 
     res.status(201).send(`student with name ${name} successfully created`);
    } catch (error) {
         res.status(500).send("Server error:-unable to make an entry");
        console.log(error);
    }

}
const updateEntries=(req,res)=>{
    const {id}=req.params;
    const {name,email}=req.body;
    let updateQuery,fields;
    if(name && email){
    updateQuery=`UPDATE students set name=?,email=? WHERE id=?`;
     fields=[name,email,id];
    }
    db.execute(updateQuery,fields,(err,result)=>{
        if(err){
            console.log(err.message);
        res.status(500).send(err.message);
        db.end();
        return;
        }
        if(result.affectedRows===0){
            res.status(404).send("student not found");
            return;
        }
        res.status(200).send("student has been updated");
    })
}
const deleteEntry=(req,res)=>{
    const {id}=req.params;
    const deleteQuery=`DELETE FROM students WHERE id=?`;
    db.execute(deleteQuery,[id],(err,results)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message);
        db.end();
        return;
    }
    console.log("student has been deleted");
    if(results.affectedRows===0){
        res.status(404).send("student not found");
        return;
    }
    res.status(200).send(`student with id ${id} is deleted`);
    })
}

module.exports={retrieveEntries,addEntries,updateEntries,deleteEntry};