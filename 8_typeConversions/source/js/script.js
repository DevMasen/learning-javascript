//! Sabz Learn

// var userAge = prompt("سن خود را وارد نمایید:")

var userNumberAge = Number(userAge)

var userNumberAge = +userAge 

// NaN => Not A Number

// alert(userNumberAge)
// alert(typeof userNumberAge)

/////////////////////////////////////

var userAge = 19 // number

var userStringAge = String(userAge) // "19"

var bool = false // boolean

var stringBool = String(bool) // string "false"
// alert(stringBool)

// alert(typeof stringBool)

//! SabzLeaarn End

//! My Notes

//! My Notes End

/* //! Document

String conversion happens when we need the string form of a value.
String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

Numeric conversion in mathematical functions and expressions happens automatically.

For example, when division / is applied to non-numbers:
alert( "6" / "2" ); // 3, strings are converted to numbers

Numeric conversion rules:
Value --------------->Becomes…
undefined ----------->NaN
null ---------------->0
true and false ------>1 and 0
string -------------->"" or " " or "  " ... => 0 
string -------------->"Anything" => NaN

Boolean conversion rules:

Value--------------------------->Becomes…
0, null, undefined, NaN, ""----->false
any other value----------------->true
*/ //!Document End