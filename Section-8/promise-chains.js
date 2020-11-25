
new Promise((resolve, reject) => {
    throw 'fail';
})
    .then(val => console.log(val))
    .then(val => console.log(val), err => console.log(err))
    .finally(_ => console.log('Cleaning Up'))

 


Promise.reject('fail')
    .then(val => {
        console.log(val)
        return 'done'
    })
    .then(val => console.log(val))
    .catch(err => console.log(err))
    .finally(_ => console.log('Cleaning Up'))



// Promise.resolve('done')
//     .then(val => {
//         console.log(val);
//         return new Promise(resolve => {
//             setTimeout(() => resolve('done2'), 1000)
//         })
//     })
//     .then( val => { console.log(val) })