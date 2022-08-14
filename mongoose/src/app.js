const mongoose = require('mongoose');

//Connection creation and new database creation or using existing database
mongoose.connect('mongodb://localhost/learnMongo').then(()=>{console.log("Connection Successful")})
.catch(err=>{console.error('Could not establish a connection',err)})

const usersSchema = new mongoose.Schema({
    id : {
       type: Number,
       required : true
    } ,
    first_name : String,
    last_name : String,
    email : String,
    gender : String,
    active :Boolean,
    ip_address : String,
    date : {
        type : Date,
        default : Date.now
    } 
})

// collection creation
const User = new mongoose.model('User', usersSchema) ; //more like class- pascal convention

//create document 
async function newUser() {
const user = new User({
    id : 1,
    first_name : "Barty",
    last_name : "Brakewell",
    email : "bbrakewell0@toplist.cz",
    gender : "Male",
    active : true,
    ip_address : "42.205.130.14"
})
let data = await user.save();
console.log(data);
}
// newUser();

async function readUser(){
    let data1 = await User.find({id:1});
    console.log(data1);
}
readUser();

