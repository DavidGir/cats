// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // When readfile function is complete callback function is called with the data logging it to the console:
    if (!error) callback(data);
  });
};

// This function serves to print out the cat breed and its passed as a callback to breedDetailsFromFile:
const printCatBreed = breed => {
  console.log("Return Value", breed);
};

breedDetailsFromFile("Bombay", printCatBreed);