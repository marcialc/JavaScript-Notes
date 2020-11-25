
function doAsyncTask(cb) {

    setTimeout(() => {
        console.log("Async Task Calling Callback");
        cb();
    }, 0)
}

doAsyncTask(() => {
    doAsyncTask(() => {
        doAsyncTask(() => {
            doAsyncTask(() => {
                doAsyncTask(() => {})
            })
        })
    })
});