"use strict";
// // // create object datatype
// // // type userDataType = {
// // //     readonly name: string;
// // //     age: number;
// // //     isAdmin?: boolean;
// // // }
// // // let user1: userDataType = {
// // //     name: "John",
// // //     age: 30,
// // //     isAdmin: true
// // // }
// // // // user1.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
// // // user1.age = 31; // Allowed: age is not read-only 
// // // let user2: userDataType = {
// // //     name: "Alice",
// // //     age: 25
// // // }  
// // //create function datatype
// // // function add(a: number, b: number): number {
// // //     return a + b;
// // // }
// // // console.log(add(5, 3)); // Output: 8
Object.defineProperty(exports, "__esModule", { value: true });
//Create a class Car that uses this interface
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} is starting.`);
    }
}
const myCar = new Car("Toyota");
myCar.start(); // Output: Toyota is starting.
// Create a function that checks if the input is a string or number.and if the value is a string return its length, otherwise return the number multiplied by 2 (type)
function checkType(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(checkType("Hello")); // Output: 5
console.log(checkType(10)); // Output: 20
//Create classes Dog and Cat, create a function and use instanceof to detect the type
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function identifyAnimal(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else if (animal instanceof Cat) {
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
identifyAnimal(myDog); // Output: Woof!
identifyAnimal(myCat); // Output: Meow!
//# sourceMappingURL=main.js.map