//! Sabz Learn
// var showValue = function () {
// 	var num1 = 2
// 	var num2 = 8
// 	var resultNumber = num1 + num2
// 	alert("Num1 + Num2 = " + resultNumber)
// };

// var sayHi = function () {
// 	alert('Hi :)')
// }

// showValue()

// sayHi()
// sayHi()
// sayHi()
//! Sabz Learn End

//! My Notes
// var showName = function() {
// 	alert("Mohammad Hossein")
// };

// alert(showName);
// showName();
// console.log(showName);

// function ask(question, yes, no) {
// 	if (confirm(question)) yes()
// 	else no();
//   }
  
//   function showOk() {
// 	alert( "You agreed." );
//   }
  
//   function showCancel() {
// 	alert( "You canceled the execution." );
//   }
  
//   ask("Do you agree?", showOk, showCancel);

// var date = new Date;
// var hour = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();

// function printTime(){
// 	alert(hour+":"+minutes+":"+seconds)
// }

// printTime();

// var copyFunc = printTime;
// copyFunc();
//* چی نوشتم حاجی
//! My Notes End

/* //! Document 
*Function is a value : 

Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

We can even print out that value using alert:

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code
Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

Surely, a function is a special value, in the sense that we can call it like sayHi().

But it’s still a value. So we can work with it like with other kinds of values.

We can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
Here’s what happens above in detail:

The Function Declaration (1) creates the function and puts it into the variable named sayHi.
Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
Now the function can be called as both sayHi() and func().
We could also have used a Function Expression to declare sayHi, in the first line:

let sayHi = function() { // (1) create
  alert( "Hello" );
};

let func = sayHi;
...
Everything would work the same.


*Callback functions:

Let’s look at more examples of passing functions as values and using function expressions.

We’ll write a function ask(question, yes, no) with three parameters:

question
Text of the question
yes
Function to run if the answer is “Yes”
no
Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
In practice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such functions usually draw a nice-looking question window. But that’s another story.

The arguments showOk and showCancel of ask are called callback functions or just callbacks.

The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.

A function is a value representing an “action”
Regular values like strings or numbers represent the data.

A function can be perceived as an action.

We can pass it between variables and run when we want.

* Fuction Decleration vs Function Expression :
A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.

For example, this works:

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

*Functions are values. They can be assigned, copied or declared in any place of the code.
?If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
*If the function is created as a part of an expression, it’s called a “Function Expression”.
?Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
*Function Expressions are created when the execution flow reaches them.
?In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

*So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
*/ //! Document End