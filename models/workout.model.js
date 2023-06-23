const mongoose = require('mongoose')
const schema = mongoose.Schema;

const WorkSchema = new schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Workout', WorkSchema)