function isAnagram(s, t) {
  let sortedS = s.toLowerCase().split('').sort().join('');
  let sortedT = t.toLowerCase().split('').sort().join('');
  return sortedS === sortedT;
}
console.log(isAnagram("UNDEFINABILITy", "UNIDENTIFIABLY")); // true
console.log(isAnagram("java", "script")); // false




// Calculator Function with Switch Statement

// function calculator(a, b, operation) {
//   switch (operation) {
//     case 'add':
//         console.log('Adding numbers:', a, 'and', b);
//       return a + b;
//     case 'subtract':
//         console.log('Subtracting numbers:', a, 'and', b);
//       return a - b;
//     case 'multiply':
//         console.log('Multiplying numbers:', a, 'and', b);
//       return a * b;
//     case 'divide':
//         console.log('Dividing numbers:', a, 'and', b);
//       return a / b;
//     default:
//       throw new Error('Invalid operation');
//   }
// }
// console.log(calculator(10, 5, 'add')); // returns 15
// console.log(calculator(10, 5, 'subtract')); // returns 5
// console.log(calculator(10, 5, 'multiply')); // returns 50
// console.log(calculator(10, 5, 'divide')); // returns 2