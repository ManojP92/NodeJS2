function taskOne(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Taske One");
            let completed=true;
            if(completed){
                resolve();
            } else{
                reject();
            }
        }, 2000);
    })

}
function taskTwo(){
    console.log("task Two");
}
taskOne();
taskTwo();