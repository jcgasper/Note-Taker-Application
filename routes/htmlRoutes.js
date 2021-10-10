//require
const path = require("path");




//export HTML route function

module.exports = function(app) {
    // /notes URL routing
    app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//wildcard url routing

app.get("*", function(req,res) {
res.sendFile(path.join(__dirname, "../public/index.html"));

});


//close module
};