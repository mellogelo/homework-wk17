const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter exercise duration in minutes"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}
,
{
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
});    

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;