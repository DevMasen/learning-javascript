//! My Notes 
// let iifeType = typeof (function(){
//   alert("Alert From IIFE function");  
// }());



// console.log(iifeType);

// console.log(typeof (function(){
//   alert("WTF!")
// })());

// let arr = [1, 2, 4 ,5647, 744, 34];
// arr.array.forEach(element => {
  
// });

// console.log(typeof myFunc);
// console.log(myFunc("KIR"));

// let fx = (par=8,par2=6) => {
//   return par * par2 * 2
// };

// console.log(fx());

// function outerFunc(fx=function(){}){
//   fx("Hello");
// }

// function printResult(){
//   alert("KIR");
// }

// outerFunc(function(x){
//   console.log(x);
// });

//! My Notes End

/* //!Document

*IIFE
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


*Use cases:

*Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
*Execute an async function
An async IIFE allows you to use await and for-await even in older browsers and JavaScript runtimes that have no top-level await:

const getFileStream = async (url) => {
  // implementation
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();


*The module pattern
We would also use IIFE to create private and public variables and methods. For a more sophisticated use of the module pattern and other use of IIFE, you could see the book Learning JavaScript Design Patterns by Addy Osmani.


const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0


*For loop with var before ES6
We could see the following use of IIFE in some old code, before the introduction of the statements let and const in ES6 and the block scope. With the statement var, we have only function scopes and the global scope. Suppose we want to create 2 buttons with the texts Button 0 and Button 1 and when we click them, we would like them to alert 0 and 1. The following code doesn't work:


for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
When clicked, both Button 0 and Button 1 alert 2 because i is global, with the last value 2. To fix this problem before ES6, we could use the IIFE pattern:


for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
When clicked, Buttons 0 and 1 alert 0 and 1. The variable i is globally defined. Using the statement let, we could simply do:


for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
When clicked, these buttons alert 0 and 1.

*/ //!Document End