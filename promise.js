const promise = new Promise((resolve, reject)=>{
    // resolve('hello world')
    reject('there was an error')
})

console.log(promise);
promise.then((data)=>console.log(data)).catch((err)=> console.log(err));