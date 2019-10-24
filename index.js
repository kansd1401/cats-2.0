const {fetchBreedDescription} = require('./breedFetcher');
const breed = process.argv[2];

fetchBreedDescription(breed,(data) => console.log(data));