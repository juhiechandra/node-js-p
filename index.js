// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', function(request,response)){
  response.sendFile(path.join(__dirname,''));
}