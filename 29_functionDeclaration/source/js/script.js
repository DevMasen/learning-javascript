//! Sabz Learn
// Function | تابع

// alert("من یک آلرت هستم")

// function showValue () {
// 	var num1 = 2
// 	var num2 = 8
// 	var resultNumber = num1 + num2
// 	alert('Result: ' + resultNumber)
// }

// showValue()
// showValue()
// showValue()

// showValue()
//! Sabz Learn End

//! My Notes
// var confirmed = confirm("Do you Agree with terms and conditions?",true);
// alert(confirmed);

// function printResult(x,y){
// 	alert(x + y);
// }
// let myX = 10;
// let myY = 15;
// printResult(myX,myY)
// printResult(4,5)

// let userName ="Ali";
// function changeValue(replacedUserName){
// 	userName = replacedUserName;
// 	return;
// }
// alert(userName);
// changeValue("Mohammad");
// alert(userName);

// function testDefault(x,y=0){ //The default Value will be 0 for both.
// 	alert(x+y);
// 	alert(typeof(x+y));
// 	alert(y);
// 	alert(x);
// }
// testDefault(10,10);
// testDefault(10);
// testDefault();

// function showError(){
// 	return "NOT Set!";
// }
// function defaultTextSet(par1=showError(),par2=showError()){
// 	alert(par1 + "  " + par2)
// }
// defaultTextSet("Masen","Mohseni");
// defaultTextSet("Masen");
// defaultTextSet(undefined,"Mohseni");
// defaultTextSet();

//? Excercise1:
//? The following function returns true if the parameter age is greater than 18.
//? Otherwise it asks for a confirmation and returns its result.
//? function checkAge(age) {
//?   if (age > 18) {
//?     return true;
//?   } else {
//?     return confirm('Did parents allow you?');
//?   }
//? }
//? Rewrite it, to perform the same, but without if, in a single line.
//? Make two variants of checkAge:
//? Using a question mark operator ?
//? Using OR ||
// * Answer:
// let userAge = +prompt("Enter your age");

// Method 1 : Using ?
// function checkAge(age){
// 	return (age > 18 ? true : confirm('Did parents allow you?'));
// }
// Method 2 : Using ||
// function checkAge(age){
// 	return (
// 		(age > 18) || confirm('Did your parents allow you?')
// 	)
// }
// alert(checkAge(userAge));

//? Excercise 2 :
//? Write a function min(a,b) which returns the least of two numbers a and b.
//? For instance:
//? min(2, 5) == 2
//? min(3, -1) == -1
//? min(1, 1) == 1

//* Answer:
// function min(a=0, b=0){
// 	return a > b ? b :b > a ? a : a
// }
// alert(min(2,5));
// alert(min(3, -1));
// alert(min(1, 1));

//? Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
//? pow(3, 2) = 3 * 3 = 9
//? pow(3, 3) = 3 * 3 * 3 = 27
//? pow(1, 100) = 1 * 1 * ...* 1 = 1
//? Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
//? Run the demo
//? P.S. In this task the function should support only natural values of n: integers up from 1.

//* Answer:
// function pow(x = 0, n = 0) {
//   return x ** n;
// }

// let xInput = +prompt("Enter x: ", 0);
// let nInput = +prompt("Enter n: ", 0);
// if (isNaN(xInput) || isNaN(nInput)) {
//   alert("Invalid Input!");
// } else if (nInput < 1 || Math.floor(nInput) != nInput) {
//   alert("n must be integer and more than equal to 1!");
// } else {
//   alert(pow(xInput, nInput));
// }

//! My Notes End

/*  //! Document
* Argument vs Parameter: 
When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).
We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".

*Default Values
Default values
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");
That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

Now if the text parameter is not passed, it will get the value "no text given".

The default value also jumps in if the parameter exists, but strictly equals undefined, like this:

showMessage("Ann", undefined); // Ann: no text given
Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  anotherFunction() only executed if no text given
  its result becomes the value of text
}

* Handle nullish Values
Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

function showCount(count) {
  if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown


* Return a Value
Returning a value
A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

There may be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
It is possible to use return without a value. That causes the function to exit immediately.

For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  ...
}
In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.

* Empty & not Set return count as undefined
A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined:

function doNothing() {  empty  }

alert( doNothing() === undefined ); // true
An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true

* Summary to Function Declaration 
Summary
A function declaration looks like this:

function name(parameters, delimited, by, comma) {
  code 
}
Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
A function can return a value. If it doesn’t, then its result is undefined.
To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

Function naming:

A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
A function is an action, so function names are usually verbal.
There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.
Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.
*/ //! Document End
