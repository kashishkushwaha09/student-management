const Student = require('./studentModel');
const IdentityCard = require('./identityCardModel');
const Department= require('./departmentModel');

//one to one relationship
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);    

Department.hasMany(Student);
Student.belongsTo(Department);
module.exports = {
    Student,
    IdentityCard,
    Department
}