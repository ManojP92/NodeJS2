let a = [10,20,30,40]
 let completed=false
 const x=10;

 function test(){
    let b = 10;
    const promise1 = new Promise( (resolve,reject)=>{

        for(let i=0; i<a.length; i++){
            setTimeout(()=>{
                if( a[i] == 10) resolve(b= 100) ;
            },2000)
        } 
        // if(b==10){     
        //     reject("Error!")
        // }

    })
promise1.then((b)=>{
console.log(b)
}).catch(()=>{
    console.log(b, 'caught error while handling the promise')
  })
}

test();