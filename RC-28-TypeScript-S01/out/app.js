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
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.ServerError);
