///////////////////////////////////////
// Lecture: Hoisting

//The biggest thing with hoisinting, is wer can decalre functions before we want to use them in our code

//Functions
calculateAge(1965); // will work because its a function declaration

function calculateAge (year) {
    console.log(2017 - year);
}


//retirement(1990); // wont work because its a function expression rather than a declaration
var retirement = function(year){
    console.log(65-(2017-year));
}

// Variables

console.log(age); // will retun undefined
console.log(age); // will return undefined
var age = 23; // stored in the global exacution context object
console.log(age); // will return 23

function foo(){
    var age = 65;
    console.log(age); // will return 65
}

foo(); // gets its own exacution context object
console.log(age); // will return 23 - because the var age is stored in the global exacution context object


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









