
 let posts= [
   { title: 'post one', body: 'this is post one!'},
   { title: 'post two', body: 'this is post two!'}
]

function getPost(){
    posts.forEach((post)=>{
        console.log(post.title);
    })
}
function createPost(callback){
    setTimeout(() => {
          posts.push({title: 'post three', body: 'this is post three!'});
          callback();
        }, 1500);
}


createPost(getPost);
//getPost();