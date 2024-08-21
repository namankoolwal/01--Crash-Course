"use strict";
// **************************************Functions************************************
// Named Function
function namedFun() {
    console.log("this is named function");
}
// Anonymous Function
const anonymousFun = function () {
    console.log("this is an anonymous function");
};
// Arrow Function
const arrowFun = () => {
    console.log("this is a arrow function");
    return 10;
};
// explicit type return - we have to explicitly tell the type of return
const explicit = () => {
    return "this is explicit return";
};
// Implicit return - typescript implicitly evaluated the type of function return
const implicit = () => {
    return "this is implicit return";
};
// Optional parameterd
const optional = (name, age, gender) => {
    return `my name is ${name}`;
};
optional("naman", 22);
// default parameters
const defaultParameter = (name = "default") => {
    console.log(`my name is ${name}`);
};
defaultParameter("naman");
const restParameters = (...names) => {
    console.log(names);
};
restParameters("naman", "yugal", 10);
