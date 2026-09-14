let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false; // Change this to true to test resolution
        if (success) {
            resolve("Operation completed successfully.");
        } else {
            reject("Operation failed.");
        }
    }, 1000);
});
promise.then((message) => {
    console.log(message);
}).catch((error) => {   //must have a catch block to handle errors
    console.error(error);
});