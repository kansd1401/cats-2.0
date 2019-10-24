const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const link = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(link, (error, response, body) => {
    if (error) {
      callback(error,'Api down');
    } else if (JSON.parse(body).length !== 0) {
      callback(error,JSON.parse(body)[0]['description'].trim());
    } else {
      callback(error,'Please enter a valid breed name');
    }
  });
};

module.exports = { fetchBreedDescription };

