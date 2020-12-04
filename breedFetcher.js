const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    //console.log(data.length)
    if (error) {
      console.log('Error fetch details:', error);
      callback(error, null);
    }

    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback('Cannot find breed.')
    }

  });
};


module.exports = { fetchBreedDescription };
