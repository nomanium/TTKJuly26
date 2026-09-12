// Homework 3 — Callback Calculator

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log("Sum:", calculate(10, 5, sum));
console.log("Subtract:", calculate(10, 5, subtract));
console.log("Multiply:", calculate(10, 5, multiply));
console.log("Divide:", calculate(10, 5, divide));

