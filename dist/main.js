"use strict";
// // create object datatype
// // type userDataType = {
// //     readonly name: string;
// //     age: number;
// //     isAdmin?: boolean;
// // }
// // let user1: userDataType = {
// //     name: "John",
// //     age: 30,
// //     isAdmin: true
// // }
// // // user1.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
// // user1.age = 31; // Allowed: age is not read-only 
// // let user2: userDataType = {
// //     name: "Alice",
// //     age: 25
// // }  
// //create function datatype
// // function add(a: number, b: number): number {
// //     return a + b;
// // }
// // console.log(add(5, 3)); // Output: 8
Object.defineProperty(exports, "__esModule", { value: true });
/* Create a Generic function called getPropetry.
The function should take two parameters: the object and the key we want to access.
Use extends keyof to restrict the key parameter so it only accepts valid keys from the object. */
function getProperty(obj, key) {
    return obj[key];
}
const user1 = {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com"
};
console.log(getProperty(user1, "id")); // Output: 1
console.log(getProperty(user1, "username")); // Output: john_doe
console.log(getProperty(user1, "email")); // Output: john.doe@example.com   
/*Create a Generic function called setUpdate.
The function must accept: the target object, the key to update, and the new value.*/
function setUpdate(obj, key, value) {
    obj[key] = value;
}
const car1 = {
    brand: "Tesla",
    year: 2020,
    isElectric: true
};
setUpdate(car1, "year", 2021);
console.log(car1.year);
//=======================================================================
//Define an enum named OrderStatus with values: Pending, Shipped, Delivered, and Cancelled
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
//Write a function checkStatus that takes an Order and returns a friendly message based on its current status
function checkStatus(order) {
    switch (order.status) {
        case OrderStatus.Pending:
            return `Order ${order.id} is pending.`;
        case OrderStatus.Shipped:
            return `Order ${order.id} has been shipped.`;
        case OrderStatus.Delivered:
            return `Order ${order.id} has been delivered.`;
        case OrderStatus.Cancelled:
            return `Order ${order.id} has been cancelled.`;
        default:
            return `Order ${order.id} has an unknown status.`;
    }
}
const order1 = {
    id: 101,
    status: OrderStatus.Pending
};
const order2 = {
    id: 102,
    status: OrderStatus.Shipped
};
console.log(checkStatus(order1)); // Output: Order 101 is pending.
console.log(checkStatus(order2)); // Output: Order 102 has been shipped.
//# sourceMappingURL=main.js.map