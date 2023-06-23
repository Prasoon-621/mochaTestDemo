const express = require('express')
const router = express.Router()
const Workoutcontroller = require('../controllers/workout.controller')


router.get('/', (req, res) => {
    res.json({ msg: "this is a get all workouts" })
})
router.get('/:id', (req, res) => {
    res.json({ msg: "this is a get single workouts" })
})
router.post('/',Workoutcontroller.createworkout)
module.exports = router