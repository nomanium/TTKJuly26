const customer = {
    name: "john",
    email: "john@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};
console.log(customer.name); // Accessing the name property
console.log(customer.address.street); // Accessing the street property of the nested address object
console.log(customer.address.city); // Accessing the city property of the nested address object
console.log(customer.address.state); // Accessing the state property of the nested address object