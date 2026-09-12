//What will be the output?
console.log("1");	

setTimeout(() => {      //waits for 2 seconds before executing the function inside it
    console.log("2");
}, 2000);

console.log("3");       //prints after 1 because setTimeout is asynchronous and doesn't block the execution of the next line of code.

//Task: Write the output order and explain why 2 doesn't appear before 3.
// output order:
// 1
// 3
// 2   //2 appears after 3 because of 2 seconds delay