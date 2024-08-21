//******************************** string literals*******************************************

let stringLiteral : "naman" ;     //means it can only store naman as a value . no other value is acceptable

stringLiteral = "naman";
// stringLiteral = "yaman"     // error- b/c it yaman is not assignable to type naman


// ===============================================

let stringLiteralTwo : "naman" | 26      //using with union means it can have naman or 26 as value

stringLiteralTwo = "naman"
stringLiteralTwo = 26

// stringLiteral = "rahul"     //error


// ********************************** Numeric Literals**********************************

let numericLiterals : 2002;

numericLiterals = 2002;
// numericLiterals = 2001      //error


// ********************************** Boolean Literals***********************************

let booleanLiterals : true;

booleanLiterals = true;

// booleanLiterals = false;   //error

