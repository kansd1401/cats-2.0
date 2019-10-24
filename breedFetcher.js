const request = require('request');
const link = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

request(link, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log('statusCode:', response && response.statusCode);
    console.log(data[0]['description']);
  } else {
    console.log('Please enter a valid breed name');
  }
  
});