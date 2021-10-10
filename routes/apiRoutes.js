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
    app.delete('/api/notes/:id', function(req, res) {
        // Gets id number of note to delete
        let deleteNote = req.params.id;
        
    
        fs.readFile('./db/db.json', (err, data) => {
          if (err) 
          throw err;
    
          
          dbData = JSON.parse(data);
          
          // 
          
          for (let i = 0; i < dbData.length; i++) {
            if (dbData[i].id === Number(deleteNote)) {
              dbData.splice([i], 1);
            }
          }
          console.log(dbData);
          stringData = JSON.stringify(dbData);
    
          fs.writeFile('./db/db.json', stringData, (err, data) => {
            if (err) 
            throw err;
          });
        });
        // 
        res.send("Note Deleted");
      });
};