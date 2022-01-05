const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/app'));



app.get('/', function(_req,res) {
    res.sendFile(path.join(__dirname+'/dist/app/index.html'));
});



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });

