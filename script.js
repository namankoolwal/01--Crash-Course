// Basic Types
// . Number, String, Booleans
// . Arrays, Tuples
// . Any, unknown, never, void
// . Enum
var a;
var arr;
var str = "hey";
var str2 = "hey"; // if we gave a value during declaration, we can skip the type
var tupple = [1, "hey"]; // tuple is an array with fixed number of elements
var mixedArray = [1, "two", 3, "four", "five"]; // mixed array
function throwError() {
    throw new Error("An error occurred");
}
// throwError(); // Function that throws an error and never returns
console.log("Hello, world!"); // Function that returns void
var direction;
(function (direction) {
    direction["up"] = "UP";
    direction["down"] = "DOWN";
    direction["left"] = "LEFT";
    direction["right"] = "RIGHT";
})(direction || (direction = {}));
console.log(direction.up); // UP
