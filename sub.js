const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
	extended:true
}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/calc.html");
});

app.post("/", function(req, res) {
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
	
var result = num1 - num2 ;
	
res.send("Subtraction:- "+ num1 + " - " + num2 + " = " + result);
console.log(req.body);
console.log(res.body);
console.log('Req Body: ', req.data);
console.log('Res Body: ', res.data);
});

app.listen(3000, function(){
console.log(`server is running on http://localhost:${3000}`);
})