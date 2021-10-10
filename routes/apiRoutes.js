// REQUIRE

const fs = require("fs");
var path = "/api/notes";
var filePath = "./db/db.json";

// exports function to be used by server
module.exports = function(app) {

    // API GET REQUEST
app.get(path, function(req,res) {

    fs.readFile(filePath,(err,data) => {
    if (err)
    throw err;
    
    fileData = JSON.parse(data);
    res.send(fileData);

    });
});

//API POST REQUEST

app.post(path, function(req,res) {

    let newNote = req.body;

    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        dbData.push(newNote);
        let number = 1;
        dbData.forEach((note, index) => {
          note.id = number;
          number++;
          return dbData;
        });
        console.log(dbData);
  
        inputData = JSON.stringify(dbData);
  
        fs.writeFile(filePath, inputData, (err, data) => {
          if (err) 
          throw err;
        });
      });
      res.send("note submitted");


});
//close module


    //API DELETE REQUEST



};