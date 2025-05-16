const express= require('express');
const app=express();
const db=require('./utils/db-connection');
const studentRouter=require('./routes/studentRoutes');
const studentsModel=require('./models/studentModel')
app.use(express.json());
app.use('/api/students',studentRouter);
db.sync({force:true}).then(()=>{
app.listen(3200,()=>{
    console.log("server is listening on port 3200");
})
})
.catch((err)=>{
    console.log(err);
})
