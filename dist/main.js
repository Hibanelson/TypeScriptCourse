"use strict";
// create object datatype
// type userDataType = {
//     readonly name: string;
//     age: number;
//     isAdmin?: boolean;
// }
// let user1: userDataType = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }
// // user1.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
// user1.age = 31; // Allowed: age is not read-only 
// let user2: userDataType = {
//     name: "Alice",
//     age: 25
// }  
//create function datatype
// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(5, 3)); // Output: 8
Object.defineProperty(exports, "__esModule", { value: true });
let employee1 = {
    name: "Bob",
    age: 28,
    isActive: true
};
let employee2 = {
    name: "Eve",
    age: 35
};
console.log(employee1); // Output: { name: 'Bob', age: 28, isActive: true }
console.log(employee2); // Output: { name: 'Eve', age: 35 }
//Create a function sumNumbers that uses Rest Parameters to accept any number of arguments.
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15
//Create a function calculateSalary that takes an employee's base salary and optional bonus, and returns the total salary.
function calculateSalary(baseSalary, bonus) {
    return baseSalary + (bonus || 0);
}
console.log(calculateSalary(50000)); // Output: 50000
console.log(calculateSalary(50000, 10000)); // Output: 60000
function add(a, b) {
    return a + b;
}
console.log(add(5, 1)); // Output: 6
console.log(add("Hello, ", "world!")); // Output: Hello, world! 
let admin1 = {
    name: "Alice",
    id: 1,
    email: "alice@example.com",
    skills: ["JavaScript", "TypeScript"],
    role: "Developer"
};
console.log(admin1);
const userTuple = ["John", 30, "Admin"];
console.log(userTuple); // Output: ["John", 30, "Admin"]
//Create a function that takes an order and returns a message based on the order status
function getOrderStatus(order) {
    if (order.status === "InProgress") {
        return `Order ${order.id} is in progress with items: ${order.items.join(", ")}.`;
    }
    else if (order.status === "Delivered") {
        return `Order ${order.id} has been delivered with items: ${order.items.join(", ")}.`;
    }
    return "Unknown order status.";
}
const order1 = {
    id: 101,
    items: ["Laptop", "Mouse"],
    status: "InProgress"
};
const order2 = {
    id: 102,
    items: ["Keyboard", "Monitor"],
    status: "Delivered"
};
console.log(getOrderStatus(order1)); // Output: Order 101 is in progress with items: Laptop, Mouse.
console.log(getOrderStatus(order2)); // Output: Order 102 has been delivered with items: Keyboard, Monitor.
//# sourceMappingURL=main.js.map