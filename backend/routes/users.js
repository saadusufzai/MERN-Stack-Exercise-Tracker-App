const router = require("express").Router();
let User = require("../models/user.model");

/**
 * @route   GET users/
 * @desc    Get All Users
 * @access  Pulic
 */

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

/**
 * @route   POST users/add
 * @desc    Add new User
 * @access  Public
 */

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});



/**
 * @route   GET users/id
 * @desc    Get Single User by id
 * @access  Public
 */

router.route('/:id').get((req, res)=>{
  User.findById(req.params.id)
  .then((user)=> res.json(user))
  .catch((err) => res.status(400).json("Error: " + err))
}) 



/**
 * @route   DELETE users/id
 * @desc    Delete User by id
 * @access  Public
 */

router.route('/:id').delete((req, res) => {

  User.findByIdAndDelete(req.params.id)
  .then(() => res.json({msg: "User deleted!"}))
  .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router
