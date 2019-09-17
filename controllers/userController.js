const Users = require('../models/userModel.js');

const UsersController = {
  index: async (req, res) => {
    try {
      const users = await Users.find({});
      res.json(users);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await Users.findById(userId);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newUser = req.body;

      const savedUser = await Users.create(newUser);

      res.json(savedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUser = req.body;
      const savedUser = await Users.findByIdAndUpdate(userId, updatedUser, {
        new: true
      });
      res.json(savedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const userId = req.params.id;
      await Users.findByIdAndRemove(userId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = UsersController;
