// ! Sabz Learn
// if - اگر

var num1 = 12;

var num2 = 4;

var num3 = 3;

if (num2 < num3) {
  // Code
  // alert("بله صحیح است");
} else {
  // Codes
  // alert("نه صحیح نیست :|")
}

// x, y

// ? Exercize عددی را از کاربر دریافت کرده و زوج یا فرد بودن آن را به کاربر نمایش دهید
// var num = +prompt("عدد را وارد کنید");
// if (num % 2 === 0) {
//   alert("زوج است");
// } else{
//   alert("فرد است");
// }
// ! Sabz Learn End

// !My Notes
var a = 12
var b = 12
// if(a==b) console.log("Equal!");

// Guess The Number Game
// while(true){
//   guess = +prompt("Guess The Number.(0 to 100)")
//   rightGuess = 75
//   if(guess === rightGuess) {
//     alert("Exactly!")
//     break;
//   } else if(guess < rightGuess) {
//     alert("Too Low! Try Again")
//   } else {
//     alert("Too High! Try Again")
//   }
// }

// var userAge = +prompt("سن خود را وارد نمایید: ")
// var massage = userAge < 12 ? "سلام کوچولو😊" : userAge < 17 ? "سلام و درور🤞" :userAge < 25 ? "سلام عرض شد🙋‍♂️" :userAge<50 ? "سلام.": "سلام خر پیر"
// alert(massage)

//? Excercize : Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’ If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// var rightName = prompt("What is the official name of JavaScript?")
// if(rightName.toLowerCase() === "ecmascript"){
//   alert("That's Right!")
// } else {
//   alert("You don’t know? ECMAScript!")
// }

//? Excercize : Rewrite this if using the conditional operator '?':
//? let result;
//? if (a + b < 4) {
//?   result = 'Below';
//? } else {
//?   result = 'Over';
//? }

// var a = 0, b = 3 
// var result = a + b < 4 ? 'Below' : 'Over';
// alert(result)

//? Rewrite if..else using multiple ternary operators '?'.
//? For readability, it’s recommended to split the code into multiple lines.

//? let message;
//? if (login == 'Employee') {
//?   message = 'Hello';
//? } else if (login == 'Director') {
//?   message = 'Greetings';
//? } else if (login == '') {
//?   message = 'No login';
//? } else {
//?   message = '';
//? }

// var login = prompt("Enter Access Level: ").toLowerCase()
// var message = (login == 'employee') ? 'Hello'    :
//               (login == 'director') ? 'Greeting' :
//               (login == '')         ? 'No login' :
//               ''
// alert(message)
// !My Notes End

/* //! Document
If we want to execute more than one statement, we have to wrap our code block inside curly braces

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.

We can also pass a pre-evaluated boolean value to if, like this:

let cond = (year == 2015); // equality evaluates to true or false
if (cond) {
  ...
}

Sometimes, we need to assign a variable depending on a condition.

For instance:

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:

let result = condition ? value1 : value2;
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

For example:

let accessAllowed = (age > 18) ? true : false;
Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

*/ //! Document End 