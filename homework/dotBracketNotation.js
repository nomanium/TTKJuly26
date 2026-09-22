const user = {
    username: "testuser",
    email: "test@test.com",
};
console.log(user.username); // Accessing the username property
console.log(user.email); // Accessing the email property

let name = "username";
let id = "email";
console.log(user[name]);
console.log(user[id]); // Accessing the email property

const field = "role";
user[field] = "admin"; // Updating the role property
console.log(user[field]); // Accessing the role property
