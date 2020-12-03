const request = require('request');
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, function(error, response, body) {
  
  // console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);

  if (error) {
    console.log(error);
  } else {
    // console.log('body:', body);
    // console.log('typeof body: ', typeof body);

    const data = JSON.parse(body);
    console.log(data);
    if (data.length !== 0) {
      console.log('typeof data: ', typeof data);
      console.log('id: ', data[0].id);
      console.log('name: ', data[0].name);
      console.log('description: ', data[0].description);
    } else console.log('no data');
  }
});