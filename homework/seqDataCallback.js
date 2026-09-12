function getData(dataId, callback) {
    // simulate API call using setTimeout
    setTimeout(() => {
        console.log("Getting data", dataId);
        if(callback){
            callback();
        }
    }, 1000);
}
getData(1, () => {
    getData(2, () => {
        getData(3);
    })
})
// Make this execute one after another:
// Getting data 1
// Getting data 2
// Getting data 3
// The delay should be 1 second for each operation.
// Expected timing:
// 0 sec → data 1
// 1 sec → data 2
// 2 sec → data 3
// Constraint: You must use callbacks.
