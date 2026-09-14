 function getData(dataId) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dataId === 3) {
                reject(`Data ${dataId} failed.`);
            } else {
                resolve(`Data ${dataId} processed successfully.`);
            }
        }, 2000);
    });
 }

async function allData() {
    try {
        await getData(1);
        console.log("Data 1 completed");
    } catch (error) {
        console.log("Error with Data 1:", error);
    }

    try {
        await getData(2);
        console.log("Data 2 completed");
    } catch (error) {
        console.log("Error with Data 2:", error);
    }

    try {
        await getData(3);
        console.log("Data 3 completed");
    } catch (error) {
        console.log("Error with Data 3:", error);
    }

    try {
        await getData(4);
        console.log("Data 4 completed");
    } catch (error) {
        console.log("Error with Data 4:", error);
    }
}

allData();