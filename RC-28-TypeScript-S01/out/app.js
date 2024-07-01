"use strict";
let myTuple3;
myTuple3 = [
    [1, "jhon"],
    [2, "smith"],
];
let selectedColor = 2;
console.log(selectedColor);
let userSize = "S";
console.log(userSize);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["ServerError"] = 401] = "ServerError";
    StatusCodes["userDetail"] = "ANIL";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.ServerError);
let d = 4;
d = "Merhaba";
d = false;
let anyArray = [1, "Selam"];
anyArray.push(true);
let e = d;
let notSure = 4;
notSure = "Hello";
console.log(notSure.length);
console.log(notSure.length);
let f = 100;
function increase() {
    console.log(f);
    f++;
}
increase();
let g = 100;
g = "Union Type";
console.log("*********************************");
function checkNumber(n) {
    if (typeof n == "number") {
        console.log(Math.pow(n, 2));
    }
    else {
        console.log(n.length);
    }
}
checkNumber(2);
checkNumber("Type Narrowing");
let h = 3;
h = "Hello, Type Aliases";
let k = "Hi There !";
const car = {
    make: "Toyota",
    modal: "Coralla",
    year: 2020,
    lastKM: 15700,
    features: ["Sunroof", "Airbag", "A/C"],
};
car.make = "Auidi";
const newCar = {
    make: "Toyota",
    modal: "Coralla",
    year: 2020,
    lastKM: 15700,
};
let car4 = "Fiat";
let car5 = "BMW";
let car6 = 2000;
const book1 = {
    book_id: 1234,
    author_name: "Tolkien",
    book_name: "The Lord of The Rings",
    author_id: 1892,
};
function selamla(mesaj, isim) {
    return `${mesaj + " " + isim}`;
}
console.log(selamla("Good morning", "Paye"));
let multiply = (x, y) => {
    return x * y;
};
function selamla2(mesaj, name) {
    if (!name) {
        name = "user";
    }
    return `${mesaj + " " + name}`;
}
console.log(selamla2("Good morning", "Anil"));
console.log(selamla2("Good morning"));
function greet(name, age) {
    if (age !== undefined) {
        return `Hello, my name is ${name} and I am ${age} years old`;
    }
    else {
        return `Hello, my name is ${name}`;
    }
}
console.log(greet("Sevim"));
console.log(greet("Sevim", 40));
function add(a, b) {
    return a + b;
}
add("merhaba", "43");
add(43, 2);
