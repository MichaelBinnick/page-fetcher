const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

// make HTTP request, wait for response
request(url, (error, response, body) => {
  console.log('error: ', error);
  console.log(response && response.statusCode);
  // take data received and write it to a file in local file system
  // using Node's fs system
  fs.writeFile(path, body, { flag: 'ax'}, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  });
})
