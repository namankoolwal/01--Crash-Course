// **************************************Functions************************************

// Named Function

function namedFun(): void {
  console.log("this is named function");
}

// Anonymous Function

const anonymousFun = function (): void {
  console.log("this is an anonymous function");
};

// Arrow Function

const arrowFun = (): number => {
  console.log("this is a arrow function");
  return 10;
};

// explicit type return - we have to explicitly tell the type of return

const explicit = (): string => {
  return "this is explicit return";
};

// Implicit return - typescript implicitly evaluated the type of function return

const implicit = () => {
  return "this is implicit return";
};

// Optional parameterd

const optional = (name: string, age: number, gender?: string): string => {
  return `my name is ${name}`;
};

optional("naman", 22);

// default parameters

const defaultParameter = (name: string = "default") => {
  console.log(`my name is ${name}`);
};

defaultParameter("naman");

// rest parameters

type rest = string | number

const restParameters = (...names: rest[]) => {
  console.log(names);
};

restParameters("naman", "yugal" , 10 );
