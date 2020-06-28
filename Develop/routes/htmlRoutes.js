var path = require("path");


module.exports = function(app) {
    //index
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/index.html"))
    });
    // exercise
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/exercise.html"))
    });
    // stats
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/stats.html"))
    });
};