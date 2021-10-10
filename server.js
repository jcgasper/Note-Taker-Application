// require()
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


//middleware parsing 

app.use(express.urlencoded( { extended: true}));
app.use(express.json());
app.use(express.static("public"));

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//Server Listener

app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});
