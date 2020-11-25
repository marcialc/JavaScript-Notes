/*
Promise.all 
is for doing a multiple async task simultaneously, waiting for all to finish to get a response
*/


const doAsyncTask = (delay) => {
    return new Promise(resolve => setTimeout(() => resolve(delay), delay));
}

let promises = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)];

Promise.all(promises).then((values) => console.log(values));

console.log('here')