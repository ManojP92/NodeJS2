
 let posts= [
    { title: 'post one', body: 'this is post one!'},
    { title: 'post two', body: 'this is post two!'}
 ]
 
 function getPost(){
     posts.forEach((post)=>{
         console.log(post.title);
     })
 }
 function createPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({title: 'post three', body: 'this is post three!'});
           let completed=true;
           if(completed){
            resolve();
           }else {reject();}
          }, 1500);
    })
 }
 
 
 createPost().then(getPost);