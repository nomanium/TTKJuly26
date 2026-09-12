console.log("generateEmail function test: ");

function generateEmail(username){
console.log(username + "@email.com");
}
generateEmail("abdullah");

console.log("generating username function test: ");
function generateUsername(firstName, lastName) {
    return firstName + "." + lastName;
}
let username = generateUsername("abdullah", "noman");
console.log(username);

console.log("generating 20% tax amount of $5000 test: ");   //can be modified to any amount and any tax rate
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
console.log(calculateTax(5000, 0.2));   // 20% of 5000 = 1000


console.log("calculating discounted price of $1000 with 10% discount test: ");   //can be modified to any amount and any discount rate
function calculateDiscountedPrice(amount, discountRate) {   // main function to calculate discounted price (1000- 10% of 1000 = 900)
    function calculateDiscount(amount, discountRate) {      // nested function to calculate discount amount (10% of 1000 = 100)
        return amount * discountRate;                       
    }
    let discountAmount = calculateDiscount(amount, discountRate);
    return amount - discountAmount;         // discounted price = amount - discount amount
}
console.log("discounted price is: ", calculateDiscountedPrice(1000, 0.1));   // discounted price = 1000 - 100 = 900