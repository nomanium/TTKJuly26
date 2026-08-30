let fatherAge = 32;
let motherAge = 22;

console.log("Father's age:", fatherAge);
console.log("Mother's age:", motherAge);

switch (true) {
  case fatherAge > motherAge:
    console.log("Father is older than mother by", fatherAge - motherAge, "years.");
    break;
  case fatherAge < motherAge:
    console.log("Mother is older than father by", motherAge - fatherAge, "years.");
    break;
  default:
    console.log("Father and mother are of the same age.");
}