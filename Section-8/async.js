
/**
 * Async/Await 
 */


const doAsyncReject = () => Promise.reject('Error');

const asyncFunction = async function() {
    try {
        const value = await doAsyncReject();
    } catch(e) {
        console.error('Moo: ', e);
        return;
    }
}

asyncFunction();

const doAsyncTask = () => Promise.resolve('done');

// let asyncFunction = async function(){

//     let value = await doAsyncTask();
//     console.log(value+'4');
//     console.log('5');
//     return '6'; //Whatever we return is like a resolve 
// };

// asyncFunction().then(v => console.log(v));

(async function(){
    let value = await doAsyncTask();
    console.log(value+'3')
})();

async function mac() {
    let value = await doAsyncTask();
    console.log(value+'2')
}

mac();

doAsyncTask().then(val => console.log(val));

console.log('here');  


const doAsyncTasks = (delay) => {
    return () => new Promise(resolve => setTimeout(() => resolve(delay), delay));
}

let tasks = [doAsyncTasks(1000), doAsyncTasks(2000), doAsyncTasks(500)];

(async () => {
    for(let task of tasks) {
        console.log(await task());
    }
})();