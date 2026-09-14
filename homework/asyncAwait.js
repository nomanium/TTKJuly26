function getData(dataId) {  //a 2nd parameter is a callback function, but we will return a promise instead
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ID: " + dataId);
            resolve();
            }, 2000);
    })
}

async function allData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

allData();