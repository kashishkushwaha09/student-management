const express= require('express');
const app=express();
const db=require('./utils/db-connection');
const studentRouter=require('./routes/studentRoutes');

app.use(express.json());
app.use('/api/students',studentRouter);
app.listen(3200,()=>{
    console.log("server is listening on port 3200");
})