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
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// create function to check admin permission
function checkAdmin(user: { name: string; isAdmin?: boolean }): string {
    if (user.isAdmin) {
        return `${user.name} has admin permissions.`;
    } else {
        return `${user.name} does not have admin permissions.`;
    }  
}
console.log(checkAdmin({ name: "John", isAdmin: true })); // Output: John has admin permissions.
console.log(checkAdmin({ name: "Alice" })); // Output: Alice does not have admin permissions.