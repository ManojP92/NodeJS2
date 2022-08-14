const {MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;
const url= "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect(){
    let result= await client.connect();
    let db= result.db("emp");
    return db.collection('emploee');
        // let responce= await collection.find({id: 1}).toArray();
        // console.log(responce);
}
module.exports= dbConnect;