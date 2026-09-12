console.log("For loops homework starts");

console.log("print 1-10:");

for (let i = 1; i < 11; i++){
console.log(i);
}

console.log("print even numbers only:");

for (let i = 2; i < 11; i+=2){
console.log(i);
}

console.log("print odd numbers only:");

for (let i = 1; i < 11; i+=2){
console.log(i);
}
console.log("For loops homework ends");

console.log("while loops practice starts");

let count = 0;
let x = 10;
while (x > 3) {
  count++;  //  0, 1, 2, 3... condition is true until x > 3, so loop will run 4 times
  x -= 3;   // 10, 7, 4, 1... condition is true until x > 3, so loop will run 4 times
}
console.log("count: " + count);
console.log("x: " + x);

console.log("printing items in an array using while loop:");
let items = ['a', 'b', 'c'];
let index = 0;
while (index < items.length) {
  console.log(items[index]);
  index++;
}