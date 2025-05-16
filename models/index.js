const Student = require('./studentModel');
const IdentityCard = require('./identityCardModel');
const Department= require('./departmentModel');
const Course = require('./courseModel'); 
const StudentCourse = require('./studentCourses');   
//one to one relationship
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);    
//one to many relationship
  
Department.hasMany(Student);
Student.belongsTo(Department);
//many to many relationship
Student.belongsToMany(Course,{through:StudentCourse});
Course.belongsToMany(Student,{through:StudentCourse});

module.exports = {
    Student,
    IdentityCard,
    Department,
    Course,
    StudentCourse
}