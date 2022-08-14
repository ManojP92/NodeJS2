//const { json } = require('express');
const express = require('express');
const app = express();
app.use(express.json());       // json middleware from express

let logger= require('./middlewares/myLogger'); // User defined middleware modules
let auth= require('./middlewares/authenticator');

const morgan= require("morgan");  // Exported middleware using- npm i morgan
const rtime= require("response-time") //

const port=3000;

var students = [
    {id: 1234, name: "john"},
    {id: 1235, name: "sagar"},
    {id: 1236, name: "haack"}
];

//app.use(logger);
//app.use(auth);
app.use(rtime((req,res,time)=>{
    console.log('request took:', req.get, time+ 'ms');
}));

app.get('/',logger,morgan("tiny"),(req,res)=>{
    res.send('Hello there!');
});

app.get('/api/students',auth,morgan('dev'), (req,res)=>{
    res.send(students);
});

app.get('/ex1.js',morgan("combined"), (req,res)=>{
   // res.send(json);
    //res.sendDate();
    res.send(JSON.stringify({no:456, item:"qwerty"}));//.sendStatus(200);
    //console.log('body', res.body);
   // console.log('app', res.app);
   // console.log('charset', res.charset);
   //console.log(res.app);
  // console.log(res);
})

app.get('/api/students/:id', (req,res)=>{
const stud= students.find(c=>c.id === parseInt(req.params.id));
if(!stud) return res.status(404).send("Invalid ID!");
res.send(stud);
//res.send(req.toString());
console.log("response body:", res.body);
console.log("request body:", req.body);
console.log("res body:", res.data);

})

app.post('/api/students',(req,res)=>{
    const stud={
        id: students.length + 1,
        name:req.body.name
    };
    students.push(stud);
    res.send(stud);
});

app.put('/api/students/:id', (req,res)=>{
    //finding the record
    const stud= students.find(c=>c.id === parseInt(req.params.id));
    if(!stud) return res.status(404).send("Invalid ID!");
    //updating the record
    stud.name = req.body.name;
    // return the updated record
    res.send(stud);
});

app.delete('/api/students/:id',(req,res)=>{
    //finding the record
    const stud= students.find(c=>c.id === parseInt(req.params.id));
    if(!stud) return res.status(404).send("Invalid ID!");
    //if found then DELETE
    const index = students.indexOf(stud);
    students.splice(index,1);
    // return the updated record
    res.send(stud);
});

app.listen(port,()=>{
    console.log(`Listening to the server on port: http://localhost:${port}`)
});
//  fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))