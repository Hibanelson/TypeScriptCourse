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

// // // create function to check admin permission
// // function checkAdmin(user: { name: string; isAdmin?: boolean }): string {
// //     if (user.isAdmin) {
// //         return `${user.name} has admin permissions.`;
// //     } else {
// //         return `${user.name} does not have admin permissions.`;
// //     }  
// // }
// // console.log(checkAdmin({ name: "John", isAdmin: true })); // Output: John has admin permissions.
// // console.log(checkAdmin({ name: "Alice" })); // Output: Alice does not have admin permissions.
// // create a type alias named employee data
// type employeeDataType = {
//     name: string;
//     age: number;
//     isActive?: boolean;
// }
// let employee1: employeeDataType = { 
//     name: "Bob",
//     age: 28,
//     isActive: true
// }
// let employee2: employeeDataType = {
//     name: "Eve",
//     age: 35
// }
// console.log(employee1); // Output: { name: 'Bob', age: 28, isActive: true }
// console.log(employee2); // Output: { name: 'Eve', age: 35 }

// //Create a function sumNumbers that uses Rest Parameters to accept any number of arguments.
// function sumNumbers(...numbers: number[]): number {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15
// //Create a function calculateSalary that takes an employee's base salary and optional bonus, and returns the total salary.
// function calculateSalary(baseSalary: number, bonus?: number): number {
//     return baseSalary + (bonus || 0);
// }
// console.log(calculateSalary(50000)); // Output: 50000
// console.log(calculateSalary(50000, 10000)); // Output: 60000
// //create a fn that takes two numbers and return their sum and take two string and return their concatenation
// function add(a: number, b:number):number;
// function add(a: string, b:string):string;
// function add(a: any, b: any): any {
//     return a + b;
// }
// console.log(add(5,1))// Output: 6
// console.log(add("Hello, ", "world!")) // Output: Hello, world! 
// //Define a type Employee with skills which is an array of strings and role string
// type Employee = {
//     skills: string[];
//     role: string;
// }
// // Define a type User with name, id and email
// type User = {
//     name: string;
//     id: number;
//     email: string;      
// }
// //Create a third type Admin that is an Intersection of both Employee and User
// type Admin = Employee & User;
// let admin1: Admin = {
//     name: "Alice",
//     id: 1,
//     email: "alice@example.com",
//     skills: ["JavaScript", "TypeScript"],
//     role: "Developer"
// };
// console.log(admin1);
// //Create a tuple with userName, userAge and userRole where tuple is readonly
// type UserTuple = readonly [string, number, string];
// const userTuple: UserTuple = ["John", 30, "Admin"];
// console.log(userTuple); // Output: ["John", 30, "Admin"]
// // userTuple[0] = "Jane"; // Error: Cannot assign to '0' because it is a read-only property.
// //Create two distinct object structures for orders InProgress and Delivered
// //Each type must have a unique Literal Value called status to differentiate between them
// type InProgress = {
//     id: number;
//     items: string[];
//     status: "InProgress";
// }
// type Delivered = {
//     id: number;
//     items: string[];
//     status: "Delivered";
//     }
// //Create a function that takes an order and returns a message based on the order status
// function getOrderStatus(order: InProgress | Delivered): string {
//     if (order.status === "InProgress") {
//         return `Order ${order.id} is in progress with items: ${order.items.join(", ")}.`;
//     } else if (order.status === "Delivered") {
//         return `Order ${order.id} has been delivered with items: ${order.items.join(", ")}.`;
//     }
//     return "Unknown order status.";
// }
// const order1: InProgress = {
//     id: 101,
//     items: ["Laptop", "Mouse"],
//     status: "InProgress"
// };
// const order2: Delivered = {
//     id: 102,
//     items: ["Keyboard", "Monitor"],
//     status: "Delivered"
// };
// console.log(getOrderStatus(order1)); // Output: Order 101 is in progress with items: Laptop, Mouse.
// console.log(getOrderStatus(order2)); // Output: Order 102 has been delivered with items: Keyboard, Monitor.

// use enum to make userRole (string) | use Generics in add function
enum UserRole {
  Admin = "Admin",
  User = "User"
}
// Create interface of User with userName, userAge, userRole use extends to add isAdmin
interface User {
    userName: string,
    userAge: number,
    userRole: UserRole
}
interface User {
    isAdmin: () => boolean
}
// Example for an Admin User
const user: User = {
  userName: "Ali",
  userAge: 30,
  userRole: UserRole.Admin,

  isAdmin() {
    return this.userRole === "Admin"
  }
}
// Example for a normal User
const user2: User = {
  userName: "Ahmed",
  userAge: 31,
  userRole: UserRole.User,

  isAdmin() {
    return this.userRole === "Admin"
  }
}
console.log(user,user.isAdmin())
console.log(user2,user2.isAdmin())
function add<T extends number>(a: T, b: T): number {
  return a + b
}
console.log(add(1,2))