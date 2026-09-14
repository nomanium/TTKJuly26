    console.log("Starting callback to promise example...");
function getData(dataId) {  //a 2nd parameter is a callback function, but we will return a promise instead
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Data ID: " + dataId);
        resolve();
        }, 2000);
    })
}

getData(1)
    .then(() => getData(2))
    .then(() => getData(3))