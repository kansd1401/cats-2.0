const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const link = 'https://api.thecatpi.com/v1/breeds/search?q=' + breedName;
  request(link, (error, response, body) => {
    if(error){
      callback('Api down')
    }
    else if (JSON.parse(body).length !== 0) {
     callback(JSON.parse(body)[0]['description']);
    } else {
     callback('Please enter a valid breed name');
    }
  });
};

module.exports = { fetchBreedDescription }

