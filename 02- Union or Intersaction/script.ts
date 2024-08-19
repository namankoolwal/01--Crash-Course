// union or intersection

// ************** Union Type *********************
let variable : string | null;  // union type - can be either string or null

variable = "hello";
variable = null;


function abcd(variable: number | string){
    if(typeof variable === "string"){
        console.log(variable.toUpperCase());
    }
    else if(typeof variable === "number"){
        console.log(variable.toFixed(2));
    }
}

abcd(10);
abcd("hello");


// ************** Intersection Type *********************

type Section = {
    section? : string;
}

type Student = {
    name : string;
}

type studentinsection = Section & Student;

let student : studentinsection = {
    name  : "naman",
    section : "A"
}
