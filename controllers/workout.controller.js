const Workout=require('../models/workout.model')

const createworkout=async(req,res)=>{
    const data = req.body;
    try {
        const workout = await Workout.create({ ...data })
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json(error)
    }
}
module.exports={
    createworkout:createworkout
}






