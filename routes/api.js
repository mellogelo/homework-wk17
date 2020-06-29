const Workout = require("../models/workout")

module.exports = function (app) {

    // get requests =========
    app.get("/api/workouts", (req,res) => {
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    // post request =========
    app.post("/api/workouts", (req,res) => {
        Workout.create({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

    app.post("/api/workouts/range",function (req,res){    
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });




    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate( params.id, {
            $push: { exercise: body }
        },
        {
            new: true, runValidators: true
        }).then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });
}