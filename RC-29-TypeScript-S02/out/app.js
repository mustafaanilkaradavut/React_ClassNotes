"use strict";
class Employee {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
}
let emp1 = new Employee(1, "Paye");
console.log(emp1);
const point1 = {
    x: 30,
    y: 50,
};
function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            console.log("Someting went wrong");
    }
}
const myCircle = {
    kind: "circle",
    radius: 10,
    width: undefined,
    height: undefined,
};
const myRect = {
    kind: "rectangle",
    height: 4,
    width: 5,
    radius: 0,
};
console.log(calculateArea(myCircle));
console.log(calculateArea(myRect));
