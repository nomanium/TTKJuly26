function getData(dataId) {  //a 2nd parameter is a callback function, but we will return a promise instead
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dataId === 3) {
                reject("Error: Data ID 3 failed.");
            }else {
                resolve(`Data ${dataId} processed successfully.`);           
            } 
        },2000);
    });
}

async function allData() {
    try {
        console.log(await getData(1));
        console.log(await getData(2));
        console.log(await getData(3));      // This will throw an error and jump to the catch block   
        console.log(await getData(4));
    } catch (error) {       // Catch block will handle the error thrown by getData(3)
        console.log(error);
    }
}

allData();