const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('student-management','root','Khush@123',{
    host:'localhost',
    dialect:'mysql'
});
(
    async()=>{
try {
    await sequelize.authenticate();
    console.log("connection to db has been created");
} catch (error) {
    console.log(error);
}
    }
)();

module.exports=sequelize;



// student-management
// const mysql=require('mysql2');

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Khush@123',
//     database:'student-management'
// })
// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("connection has been created");
//     const students=`create table IF NOT EXISTS Students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     email VARCHAR(255) UNIQUE,
//     age INT
//     )`
    
//     connection.execute(students,(err)=>{
//         if(err){
//             console.log(err);   
//             connection.end();
//             return;
//         }
//         console.log('students has been created');
//     })
  
// })
// module.exports=connection;