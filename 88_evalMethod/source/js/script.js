//! SabzLearn
// console.log(eval("alert(12)"))

// eval('var x = 10')

// alert(x + 2)
//! SabzLearn End

//! My Notes
// let expression = prompt("Enter Expression: ");

// let calculatedExpression = eval(expression);

// alert(calculatedExpression);

//! My Notes End


/* //!Document
*JavaScript eval():

Examples
Execute JavaScript code with eval():

let x = 10;
let y = 20;
let text = "x * y";
let result = eval(text);

*Never use eval(). Use code or a function instead:

let x = 10;
let y = 20;
let result = x * y;
Description

*The eval() method evaluates or executes an argument.

If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.

*Do NOT use eval()
Executing JavaScript from a string is an BIG security risk.

With eval(), malicious code can run inside your application without permission.

With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

*Syntax
eval(string)
Parameters
Parameter	Description
string	A JavaScript expression, variable, statement, or sequence of statements

*/ //!Document End