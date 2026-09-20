function calculator(a, b, operation) {
  switch (operation) {
    case 'add':
        console.log('Adding numbers:', a, 'and', b);
      return a + b;
    case 'subtract':
        console.log('Subtracting numbers:', a, 'and', b);
      return a - b;
    case 'multiply':
        console.log('Multiplying numbers:', a, 'and', b);
      return a * b;
    case 'divide':
        console.log('Dividing numbers:', a, 'and', b);
      return a / b;
    default:
      throw new Error('Invalid operation');
  }
}
console.log(calculator(10, 5, 'add')); // returns 15
console.log(calculator(10, 5, 'subtract')); // returns 5
console.log(calculator(10, 5, 'multiply')); // returns 50
console.log(calculator(10, 5, 'divide')); // returns 2