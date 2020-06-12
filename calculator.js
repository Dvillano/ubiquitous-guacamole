const express = require('express');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    let num1 = parseFloat(req.body.num1);
    let num2 = parseFloat(req.body.num2);

    let result = num1 + num2;
    res.send("Result of sum is: " + result);
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){

    let weight = parseFloat(req.body.weight);
    let height= parseFloat(req.body.height);

    let result = weight / (height*height);
    res.send("Your BMI is: " + result);
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
  });