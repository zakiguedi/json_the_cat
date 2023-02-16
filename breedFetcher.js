const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";
const request = require('request');
request(url, function(error, response, body) {
  if (error) {
    console.log('Error:', error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Breed not found.`);
    return;
  }
  const breed = data[0];
  console.log(`${breed.name}: ${breed.description}`);
  console.log(data);
  console.log(typeof data);
  console.log(typeof body);
});
