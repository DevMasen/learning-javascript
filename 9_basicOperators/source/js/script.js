//! Sabz Learn
var firstNumber = 12

var secondNumber = 4

var thirdNumber = 2

var plusResult = firstNumber + secondNumber

var minusResult = firstNumber - secondNumber - thirdNumber // 12 - 4 - 2 = 6

var tagsimResult = firstNumber / secondNumber // 12 / 4 = 3

var zarbResult = secondNumber * thirdNumber // 4 * 2 = 8 

var tavanResult = thirdNumber ** firstNumber // 2 * 2 * 2 * 2 * 2 * ... = 4096

var bagiMande = 19 % 5 //  5 + 5 + 5 = 3 ------ 4

// console.log(bagiMande);

// Excercize :
// var inputNumber1 = +(prompt("Enter first number",0))
// var inputNumber2 = +(prompt("Enter second number",0))
// console.log(inputNumber1 + inputNumber2);
// console.log(inputNumber1 - inputNumber2);
// console.log(inputNumber1 * inputNumber2);
// console.log(inputNumber1 / inputNumber2);
// console.log(inputNumber1 ** inputNumber2);
// console.log(inputNumber1 % inputNumber2);
//! Sabz Learn End

//! My Notes
var stringAddNumber = "1381" + 1216
// console.log(stringAddNumber); // 13811216
var stringAddString = "Masen" +" "+ "Mohseni"
// console.log(stringAddString); // Masen Mohseni
var stringSubtractNumber = "1345" - 345
// console.log(stringSubtractNumber);// 1000
var unaryplus = +"Masen" //Acts Like Number(...)
// console.log(unaryplus);// NaN
var numberToString = 278346 +""
var NaNToString = NaN +""
var nullToString = null +""
var booleanToString = true +""
var undefinedToString = undefined +"" 
// console.log([numberToString,NaNToString,nullToString,booleanToString,undefinedToString]);
// alert([numberToString,NaNToString,nullToString,booleanToString,undefinedToString]) // 278346,NaN,null,true,undefined
var x = 4*9+2**3-(y=2*6+5)
// alert(x)//27 
// alert(y)//17
var multipleAssignment = MA2 = MA3 = 3**3; //Chain Assignment
// alert(multipleAssignment) //27
// alert(MA2) //27
// alert(MA3) //27
//! My Notes End

/* //!Document
Let’s meet the features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
alert(s); // mystring
Note that if any of the operands is a string, then the other one is converted to a string too.

For example:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
See, it doesn’t matter whether the first operand is a string or the second one.

Here’s a more complex example:

alert(2 + 2 + '1' ); // "41" and not "221"
Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

alert('1' + 2 + 2); // "122" and not "14"
Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here’s the demo for subtraction and division:

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example:

 No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

 Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
It actually does the same thing as Number(...), but is shorter.

The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

 both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

 the longer variant
 alert( Number(apples) + Number(oranges) ); // 5

 As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.

 The fact of = being an operator, not a “magical” language construct has an interesting implication.

All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

The call x = value writes the value into x and then returns it.
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
*/ //!Document End
