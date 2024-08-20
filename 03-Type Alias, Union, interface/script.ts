// ********************type alias*************************

// 1- primitive type alias

type sankhya = number;

let pehliSankya : sankhya = 110;


// 2- object type alias

type Dabba = {
    weight : number;
    color : string
}

let box : Dabba ={
    weight :10,
    color : "red"
}


// **************************************Union Type Alias**********************************


type Age = number | string;

let ageOfUser : Age = 10;
let ageOfUser2 : Age = "eleven";



// **************************************Interface**********************************

interface Food {
    name : string;
    price : number;
}



function pizza (food : Food){
    food.name;
    food.price;
}


// =========================================================================

interface KhattaFood extends Food{
    veryKhatta : boolean;
    calories : number;
}

function khatta (khattafood : KhattaFood){
    khattafood.name;
    khattafood.price;
    khattafood.veryKhatta;
    khattafood.calories;
} 