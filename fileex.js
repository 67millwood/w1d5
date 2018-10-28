var input = process.argv[2];

var fs = require("fs");

// Asynchronous read
fs.readFile(input, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync(input);
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");