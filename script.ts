// Basic Types
// . Number, String, Booleans
// . Arrays, Tuples
// . Any, unknown, never, void
// . Enum

let a: number;
let arr: [];
let str: string = "hey";
let str2 = "hey";   // if we gave a value during declaration, we can skip the type

let tupple: [number, string] = [1, "hey"];  // tuple is an array with fixed number of elements

let mixedArray: (number | string)[] = [1, "two", 3, "four", "five"]; // mixed array


function throwError(): never {
    throw new Error("An error occurred");
    }
    
    // throwError(); // Function that throws an error and never returns

    console.log("Hello, world!"); // Function that returns void


    enum direction {
        up = "UP",
        down = "DOWN",
        left = "LEFT",
        right = "RIGHT"
    }

    console.log(direction.up); // UP