const mongoose = require("mongoose");

// here we connect the odm(object document maper) mongoose to the dbms mongodb.
// mongoose.connect("mongodb+srv://employee-system-user:employee-system-password@employee-system-0.o4qxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
mongoose.connect('mongodb+srv://krakash1022:aksh09876@cluster0.0n57yxv.mongodb.net/employee_reviw');




const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("My Database is connected");
});

// exporting the connection.
module.exports = db;
