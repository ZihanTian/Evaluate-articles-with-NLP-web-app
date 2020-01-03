
const dotenv = require('dotenv');
dotenv.config();
//console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id:process.env.API_ID, 
  application_key: process.env.API_KEY
});
var inputurl = 'http://dbpedia.org/resource/Donald_Trump';
textapi.sentiment({
    url:inputurl
},
(err,resp)=>{
    if (err ===null){
        console.log(resp);
        //res.json({
         //   message1:res.polarity,
          //  message2: res.polarity_confidence
        //});
    }else{
        //res.json({
         //   message: failText
        //});
    }
}
)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(mockAPIResponse)
})


