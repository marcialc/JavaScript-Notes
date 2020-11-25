"use strict"

function doAsyncTask(cb) {
    setTimeout(() => {
        cb(null, 'The correct data');
    }, 0);
}

doAsyncTask((err, data) => {
    if(err){
        throw err;
    } else {
        console.log("Data ", data);
    }
});

let message = 'Callback Called';