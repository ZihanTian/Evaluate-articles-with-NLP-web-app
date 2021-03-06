
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
//console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(cors())
console.log(__dirname)
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id:process.env.API_ID, 
  application_key: process.env.API_KEY
});
var inputurl 

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    inputurl = req.body.url;
    textapi.sentiment({
      url: inputurl
  },
  
  (err,resp)=>{
      
      if (err ===null){
          console.log(resp);
        res.json({
              message1:resp.polarity,
              message2:resp.polarity_confidence,
              message3:resp.subjectivity,
              message4:resp.subjectivity_confidence
          });
      }else{
          res.json({
             message: 'failText'
          });
      }
  }
  )
})



