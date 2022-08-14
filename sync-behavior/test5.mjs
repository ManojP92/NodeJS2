import fetch from 'node-fetch'
let posts= [
    { title: 'post one', body: 'this is post one!'},
    { title: 'post two', body: 'this is post two!'}
 ]
 
 function getPost(){
     posts.forEach((post)=>{
         console.log(post.title);
     })
 }
 async function createPost(){
    // setTimeout(() => {
    //      posts.push({ title: 'post three', body: 'this is post three!' });
    //      getPost();
    //  }, 1500);
    //       console.log("after 1.5 sec");
   await fetch('https://fakestoreapi.com/products/1').then(res=>res.json()).then(json=>console.log(json))
        //  const users = await response.json();
        //   console.log("Users:")
        //   return users;
    }
 createPost().then(getPost);