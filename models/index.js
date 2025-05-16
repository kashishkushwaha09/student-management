const Student = require('./studentModel');
const IdentityCard = require('./identityCardModel');

//one to one relationship
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);    

module.exports = {
    Student,
    IdentityCard
}