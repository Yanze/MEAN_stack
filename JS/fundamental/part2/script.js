var first_variable;
console.log(first_variable); // this will print undefined;
var first_variable = "Yipee I was first!"; // assign string value to variable first_variable; Global scope;

function firstFunc() { // declare a function firstFunc;
  first_variable = "Not anymore!!!";
  console.log(first_variable);
} // this function won't run, because it has never been called;

console.log(first_variable); // it will print globle variable's value : "Yipee I was first!" ;


// Problem 2
var food = "Chicken"; // assign string value to variable food in one line, global scope;

function eat() {  // declare a function eat;
  food = "half-chicken"; // if we ignore var , when eat function is called, food will be set as global variable;
  console.log(food); // it will print "half-chicken";
  var food = "gone"; // NOTE: I'M TRYING TO TRICK YOU HERE!!!! // here we assigne a local variable food and assigne a value to it;
}
eat(); // function eat has been invoked here, print undefined;
console.log(food); // print "Chicken" ; global scope;


// Problem 3
var new = "NEW!"; // new is a key word, should not to use it as a variable name;

function lastFunc() {
  new = "old"; // this function is try to change a global variable's value; but it has never been invoked;
}
console.log(new); //  error is launched;
