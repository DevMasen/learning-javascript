//! Sabz Learn
var myAge = 25;

var myName = "Mohammad Amin";

var caption = "بهترین زبان برنامه نویسی برای کسب درآمد اگر شما در حوزه طراحی و برنامه نویسی...";

var isOnline = false;

var isMale = false;
//! Sabz Learn End


//! My Notes
// Using the "typeof" operator to check the data type of the variable "isMale"

//* Type 1: number (max:2^53-1 = 9,007,199,254,740,991 / min:-2^53-1)
var num1 = Infinity;
//alert(num1) //Infinity
//alert(1/0) // Infinity
// alert(num1 * 10) //Infinity
// alert(num1 / 10) //Infinity
// alert(num1 + 10) //Infinity
// alert(num1 - 10) //Infinity
// alert(num1 ** 10) //Infinity
// alert(1/num1) //0
var num2 = -Infinity; 
// alert(num2) // -Infinity
var num3 = "String" * 10; 
// num3 = "String" / 10;
// num3 = "String - 10";
// alert(num3) //NaN
// alert(num3 * 10) //NaN
// alert(num3 / 10) //NaN
// alert(num3 / 0) //NaN
// alert(num3 + 10) //NaN
// alert(num3 - 10) //NaN
// alert(num3 ** 10) NaN
// alert(num3 ** 0) // 1
var num4 = 20;
// alert(num4) //20
var num5 = 3.14;
// alert(num5) //3.14

//* Type 2: bigint 
// for numbers bigger than 2^53-1 we use n in the end stands for BigIng
var bigInt = 248951793475901387450913847591837n;
// alert(bigInt) //248951793475901387450913847591837

//* Type 3: string
var str1 = "Masen";
// alert(str1) //Masen
var str2 = 'Mohseni';
// alert(str2) //Mohseni 
var str3 = `Age: ${num4}`;
// alert(str3) //Age: 20

//* Type 4: boolean
var bool1 = true;
// alert(bool1) //true
var bool2 = false;
// alert(bool2) //false
var bool3 = 4>=5;
// alert(bool3) //false

//* Type 5: null(object)
var phi = null;
// alert(phi) //null

//* Type 6: undefined
var undef1;
// alert(undef) //undefined
var undef2 = undefined;
// alert(undef2) //undefined

//* Type 7: symbol
var sym = Symbol("id");
// alert(sym) //Error

//* Type 8: object
var obj = Math;
// alert(obj) //[object Math]

//* Type 9: function(object)
var func = alert;
// alert(func) //function alert() { [native code] }


// operator "typeof x or typeof(x)"

//* Primitives : 
// alert(typeof (num1)) //1-number
//alert(typeof (bigInt)) //2-bigint
//alert(typeof str1) //3-string
//alert(typeof bool1) //4-boolean
// alert(typeof phi) //5-object(null)
//alert(typeof undef1) //6-undefined
// alert(typeof sym) //7-symbol
//* NON-Primitive :
//alert(typeof obj) //8-object
//alert(typeof func) //9-function(object)
//! My Notes End