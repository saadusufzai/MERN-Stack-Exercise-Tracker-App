const router = require("express").Router();
let Exercise = require("../models/exercise.model");


/**
 * @route   GET exercises/
 * @desc    get all exercises log
 * @access  Public
 */

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * @route   POST exercises/add
 * @desc    Add New exercises log
 * @access  Public
 */


router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * @route   GET exercises/id
 * @desc    get single exercises log
 * @access  Public
 */


router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * @route   DELETE exercises/id
 * @desc    Delete single exercises log
 * @access  Public
 */

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted !"))
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * @route   GET exercises/id
 * @desc    Update single exercises log
 * @access  Public
 */

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exersise) => {
      exersise.username = req.body.username;
      exersise.description = req.body.description;
      exersise.duration = req.body.duration;
      exersise.date = Date.parse(req.body.date);

      exersise
        .save()
        .then(() => res.json("Exercise updated !"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
