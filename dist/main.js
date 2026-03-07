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
// Example for an Admin User
const user = {
    userName: "Ali",
    userAge: 30,
    userRole: "Admin",
    isAdmin() {
        return this.userRole === "Admin";
    }
};
// Example for a normal User
const user2 = {
    userName: "Ahmed",
    userAge: 31,
    userRole: "User",
    isAdmin() {
        return this.userRole === "Admin";
    }
};
console.log(user, user.isAdmin());
console.log(user2, user2.isAdmin());
//# sourceMappingURL=main.js.map