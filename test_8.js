let a = [10,20,30,40]
 let completed=false

 async function test(){
    let b = 10;

for(let i=0; i<a.length; i++){
    setTimeout(()=>{
        if( a[i] == 10){  b= 100} ;
    },2000)
} 
 //const data= await x;
 console.log(b,getComputedStyle())
}
test();