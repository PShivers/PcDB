const Users = require('../models/userModel.js');

//devs
Users.deleteMany()
  .then(() => {
    const User1 = new Users({
      firstName: 'Paul',
      lastName: 'Pierre'
    });
    return User1.save();
  })
  .then(() => {
    const User2 = new Users({
      firstName: 'Cassidy',
      lastName: 'Burk'
    });
    return User2.save();
  })
  .then(() => {
    const User3 = new Users({
      firstName: 'Chad',
      lastName: 'Rad'
    });
    return User3.save();
  })
  .then(() => {
    const User4 = new Users({
      firstName: 'John',
      lastName: 'Wick 3'
    });
    return User4.save();
  });
