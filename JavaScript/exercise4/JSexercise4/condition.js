// What is a condition?
// "the state of something with regard to its appearance, quality or working order."

// Suppose we want to write a program that makes a user enter a number and then displays a message 
// if the number is positive. Here is the corresponding algorithm.

/* ======= Enter a number
of the number is positive 
Display Message =======*/

// The message should display only if the number is positive : this means it's subject to a condition

// The if statement 

// var number = Number (prompt("Enter a number:"))
// if (number > 0) {
//     console.log()
// }







//The pair of opening and closing braces defines what if called a block of code associated with an if statement. This statement represents a test. 

// The condition is always placed in parentheses after the if.

// Condition

// A condition is an expression that evaluates whether something is true or false.



// Any expression producing a Boolean value(either true or false) can be used as a condition in an if statement. If the value of this expression is true, the code block associated with it is executed.

//Boolean expression can be created using the comparison operators.

// === Equal to
//!== Not equal to
//<  Less than
//<= less than or equal to 
//> greater than
//>= greater or equal to 

// var age =Number (prompt("Enter your age:"));
// if (number < 18) {
//     console.log(number + "You're underage")
// }

// Alternative Condition
 
// You'll often want to have your code execute one way when something's true and another way when something's false.

// Else 

// var number = Number(prompt("Enter a number:"));
// if (number < 0) {
//     console.log(number + "is positive");
// } else {
//     console.log(number + " is negative or zero");
// }

/*=======*/

//Nesting conditions

// you can go next - level and display a specific message if entered number is zero. Use else if for a second conditional. See this example, which has a positive test case, negative test case, and a last resort of the number being zero:

// var number = Number(prompt("Enter a number:"));
// if (number > 0 ) {
//     console.log(number + " is positive");
// } else if (number < 0) {
//     console.log(number + " is negative");
// } else {
//     console.log(number + " is zero");
// }

//Lets build or write a program that helps students decide what to wear based on the weather using the if statement, else statemnet or the else if statement. weather conditons : cloudy, windy, rainy, stormy, sunny, snowy.


var weather = prompt("Whats the weather like today:");
if (weather === "sunny") {
    console.log(" Wear a shorts and T-shirt");
} else if (weather === "rainy") {
    console.log(" Wear a Raincoat or Rainsuit");
} else if (weather === "windy") {
    console.log(" wear your wind breaker clothing");
} else {
      console.log(" Not a vlaid weather type!");
}

