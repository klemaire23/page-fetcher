// pair programmed with Adam McPhee on this assignment

const request = require('request');
const fs = require('fs'); // use this to write the data into a file

const args = process.argv.slice(2)
const URL = args[0];
// console.log(URL); testing if URL is printing properly
const file = args[1];
// console.log(file); testing if file is printing properly

if (args.length !== 2) {
  console.log("Incorrect number of parameters entered. Please input only 2 parameters.");
  process.exit();
}


request(URL, (error, response, body) => {
  let textToSave = error + response + response.statusCode + body;
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);


  fs.writeFile(file, textToSave, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${textToSave.length} bytes to ${file}`);
    process.exit();
  })

});


// expected input and output:
  // > node fetcher.js http://www.example.edu/ ./index.html
  // Downloaded and saved 3261 bytes to ./index.html