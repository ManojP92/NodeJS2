const dbConnect= require('./mongodb');
// dbConnect().then((resp)=>{
//     resp.find({id:1}).toArray().then((data)=>{
//         console.log(data)
//     })
// })
const main = async ()=>{
    let data = await dbConnect();
    data= await data.find({id:1}).toArray();
    console.log(data)
}
main()