// create object datatype
type userDataType = {
    readonly name: string;
    age: number;
    isAdmin?: boolean;
}
let user1: userDataType = {
    name: "John",
    age: 30,
    isAdmin: true
}
// user1.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
user1.age = 31; // Allowed: age is not read-only 
let user2: userDataType = {
    name: "Alice",
    age: 25
}  
