/*                                    TERNARY OPERATORS
In JavaScript and TypeScript, the ternary operator is a concise way to write conditional statements. 
It is often used as a shorthand for simple if...else statements. Here's a definition and explanation of the ternary operator:

Definition:

The ternary operator (condition ? exprIfTrue : exprIfFalse) is a JavaScript/TypeScript operator 
that evaluates a condition and returns one of two expressions depending on whether the condition
 is true or false.

Explanation:

Syntax: condition ? exprIfTrue : exprIfFalse
Usage:
condition: An expression that evaluates to true or false.
exprIfTrue: The expression to be evaluated if condition is true.
exprIfFalse: The expression to be evaluated if condition is false.*/
//Example 1:

let age = 20;
let message = (age >= 18) ? 'Adult' : 'Minor';
console.log(message); // Output: 'Adult'
//In this example:
/*
The condition age >= 18 is evaluated (true in this case).
If the condition is true, 'Adult' is assigned to message.
If the condition is false, 'Minor' would be assigned to message.
 */

//------------------------------------------------------------------------------------------------------//
//Example 2
let userName = "Aleeze";
let password = 1710;
userName == "Jannat"
?console.log("You're logged in!")
:console.log("Invalid user name or Password!");// Output Invalid user name or Password


//------------------------------------------------------------------------------------------------------//
//Example 3
let userName1 = "Aleeze";
let password1 = 1710;
userName == "Aleeze"
?console.log("You're logged in!")
:console.log("Invalid user name or Password!");// Output: You're logged in!


