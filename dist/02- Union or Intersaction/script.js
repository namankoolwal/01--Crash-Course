"use strict";
// union or intersection
// ************** Union Type *********************
let variable; // union type - can be either string or null
variable = "hello";
variable = null;
function abcd(variable) {
    if (typeof variable === "string") {
        console.log(variable.toUpperCase());
    }
    else if (typeof variable === "number") {
        console.log(variable.toFixed(2));
    }
}
abcd(10);
abcd("hello");
let student = {
    name: "naman",
    section: "A"
};
