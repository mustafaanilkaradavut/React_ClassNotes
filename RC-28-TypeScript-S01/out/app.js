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
function endessLoop() {
    while (true) {
        console.log("Using Never Type");
    }
}
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
