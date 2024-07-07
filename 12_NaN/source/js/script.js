// ! Sabz Learn
var str1 = "sabzlearn.ir "

var num1 = 12

var num2 = 4

//  + -  * / % **


// alert(str1 / num2) 

// alert(typeof NaN)

// alert("12" + 4) // 16 ?? 124

// alert("1fgh2" / 4) // NaN ?? 3

// NaN => Not A Number

// Typeof NaN => Number

// ! Sabz Learn End

// ! My Notes
// alert("124.65" * 23) //2866.9500000000003
var pi = Math.PI
// alert("Math.sin((3*pi)/4)" /5) //NaN
// alert(+"NaN") //NaN
// alert(+NaN) //NaN
// alert(undefined + NaN) //NaN
// var nonSenceShit = "The Type of NaN is " + typeof(NaN)
// alert(nonSenceShit)
// alert(`The Type of "${nonSenceShit}" is ` + typeof(nonSenceShit))
// alert("The Type of \"typeof\" Function Return value is "+ typeof(typeof nonSenceShit))
// alert(typeof(typeof(typeof(10))))
// ! My Notes End


/*   // !Document

NaN is a property of the global object. In other words, it is a variable in global scope.

In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

There are five different types of operations that return NaN:

Failed number conversion (e.g. explicit ones like parseInt("blabla"), Number(undefined), or implicit ones like Math.abs(undefined))
Math operation where the result is not a real number (e.g. Math.sqrt(-1))
Indeterminate form (e.g. 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)
A method or expression whose operand is or gets coerced to NaN (e.g. 7 ** NaN, 7 * "blabla") — this means NaN is contagious
Other cases where an invalid value is to be represented as a number (e.g. an invalid Date new Date("blabla").getTime(), "".charCodeAt(1))
NaN and its behaviors are not invented by JavaScript. Its semantics in floating point arithmetic (including that NaN !== NaN) are specified by IEEE 754. NaN's behaviors include:

If NaN is involved in a mathematical operation (but not bitwise operations), the result is usually also NaN. (See counter-example below.)
When NaN is one of the operands of any relational comparison (>, <, >=, <=), the result is always false.
NaN compares unequal (via ==, !=, ===, and !==) to any other value — including to another NaN value.
NaN is also one of the falsy values in JavaScript.

Testing against NaN
To tell if a value is NaN, use Number.isNaN() or isNaN() to most clearly determine whether a value is NaN — or, since NaN is the only value that compares unequal to itself, you can perform a self-comparison like x !== x.

However, do note the difference between isNaN() and Number.isNaN(): the former will return true if the value is currently NaN, or if it is going to be NaN after it is coerced to a number, while the latter will return true only if the value is currently NaN:
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
*/