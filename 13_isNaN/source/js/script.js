//! Sabz Learn
var str1 = "sabzlearn.ir"

var str2 = "JavaScript"

var num1 = 12

var num2 = 4


// alert(isNaN(str2 + str1)) // true
// ! Sabz Learn End

// !My Notes
// alert(isNaN("Hello")) //true // this one tryes to change the type to number if failed return true.
alert(Number.isNaN("Hello")) //false
alert(Number.isNaN(0/0)) // true
// !My Notes End

/* //! Document
The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.

Difference between Number.isNaN() and global isNaN()
Number.isNaN() doesn't attempt to convert the parameter to a number, so non-numbers always return false. The following are all false:

JS
Copy to Clipboard
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
The global isNaN() coerces its parameter to a number:

JS
Copy to Clipboard
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, this is coerced to 1
isNaN(null); // false, this is coerced to 0
isNaN("37"); // false, this is coerced to 37
isNaN("37.37"); // false, this is coerced to 37.37
isNaN(""); // false, this is coerced to 0
isNaN(" "); // false, this is coerced to 0
*/ //! Document End