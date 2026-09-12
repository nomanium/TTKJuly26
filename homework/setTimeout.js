// Write a program that prints:
// Start
// End
// Hello after 3 seconds
// Requirements:
// Use console.log()
// Use setTimeout()
// Delay "Hello after 3 seconds" by 3 seconds
// Do not use Promise or async/await yet


console.log("Start");

setTimeout(() => {
    console.log("Hello after 3 seconds");   //waits for 3 seconds before executing the function inside it
}, 3000);

console.log("End");
