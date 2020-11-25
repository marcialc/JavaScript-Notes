
// function doAsyncTask() {
//     const promise = new Promise((resolve, reject) => {
//         console.log('Async Work Complete');
//         if(false) {
//             resolve({x:1})
//         }else{
//             reject("Error");
//         }
//         resolve();
//     });

//     return promise;
// }

// doAsyncTask().then(
//     (val) => console.log(val),
//     (err) => console.log(err)
// );


// let promise = Promise.reject('error');
// let promise = Promise.resolve('done');
// promise.then(val => console.log(val));


function doAsyncTask() {
    return Promise.resolve();
}

doAsyncTask().then(() => console.log(message));
let message = "Promise Resolved";