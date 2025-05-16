const express= require('express');
const app=express();
const db=require('./utils/db-connection');
const studentRouter=require('./routes/studentRoutes');
const departmentRouter=require('./routes/departMentRoutes');
// const studentsModel=require('./models/studentModel')
require('./models');
app.use(express.json());
app.use('/api/students',studentRouter);
app.use('/api/departments',departmentRouter);
db.sync({alter:true}).then(()=>{
app.listen(3200,()=>{
    console.log("server is listening on port 3200");
})
})
.catch((err)=>{
    console.log(err);
})
