let a = [10,20,30,40]
 let completed=false
 const x=10;
 async function test(){
    let b = 10;
    let promise1= new Promise((resolve)=>{
for(let i=0; i<a.length; i++){
    setTimeout(()=>{
        if( a[i] == 10){  b= 100;  resolve(b)} ;
    },2000)
} 
 })
await promise1;
 console.log(b)
}
test();