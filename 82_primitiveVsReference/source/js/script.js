//! SabzLearn
// var num1 = 'ali'

// var num2 = num1

// num2 = 'amin'

// console.log("num1:", num1)
// console.log("num2:", num2)

/////////////////////////////////////////////

// var usernames1 = ['ali', 'amin', 'amir', 'babak']

// var usernames2 = usernames1

// usernames2.push('Mohammad')

// console.log('Users1: ', usernames1)
// console.log('Users2: ', usernames2)

/////////////////////////////////////////////

// var product = {
//     id: 1,
//     title: 'laptop',
//     price: 90000000
// }

// var newProduct = product

// newProduct.count = 10

// console.log('Product:', product)
// console.log('New Product:', newProduct)

//? Exercise:
//? یک سامانه فروش بلیط آنلاین پیاده سازی کنید
//? به این صورت که مبدا سفر (استان) را از کاربر دریافت کرده و سپس شهر های استان وارد شده را در کنسول نمایش دهید
//? ساختار پروژه و ذخیره سازی اطلاعات بر عهده شما

//* Answer:

// let provinces = {
//     kerman : ['kerman', 'jiroft', 'zarand', 'rafsanjan', 'sirjan', 'baft'],
//     khorasanrazavi : ['mashhad', 'torbat-e-heydarie', 'ghuchan'],
//     fars : ['shiraz', 'fasa'],
//     hormozgan : ['bandarabas', 'bandarlenge', 'minab', 'gheshm'],
// }

// let userProvince = prompt("Enter Province Name: ",'');

// console.clear()
// provinces[userProvince].forEach(city => {
//     console.log(city);
// });

//! SabzLearn End


//! My Notes 
// console.log(typeof null); Object
//! My Notes End


/* //!Document
*Data types in js is broadly classified into 2 types:
1.Primitive types :
Type	Description
string	Used for denoting strings
number	Used for denoting integers or floating-point
bigint	Used for denoting whole numbers larger than 253 - 1
boolean	Used for denoting true or false
undefined	Used for denoting an unassigned value
symbol	Used for denoting unique identifiers
null	Used for denoting an intentional absence of a value

2.Non-primitive types :
Type	Description
object	Used for denoting complex data structure with a collection of properties and methods
All JavaScript values, except primitives, are objects.

*Mutable values: those which can be modified after creation
*Immutable values: those which cannot be modified after creation

So the fundamental difference between primitive and non-primitive is that primitive values are immutable and non-primitive values are mutable and Primitives are stored by value while Non-Primitive (objects) are stored by reference.

It is important to note here that the variable in which the primitive value is stored can still be reassigned a new value as shown in Example 1, but the existing value can not be changed as shown in Example 2. A primitive value can be replaced, but it can't be directly altered.

Example 1
let string = 'hello world'
string = 'this is a string';
console.log(string) // Output -> 'this is a string'
Example 2
let string = 'this is a string'
string[0] = 'T'
console.log(string) // Output -> 'this is a string.'

*How do primitive values such as strings have toUpperCase() method?
Primitives except null and undefined provide many helpful methods :
The “object wrappers” are different for each primitive type and are called: String, Number, Boolean and Symbol. Thus, they provide different sets of methods.

*Why is null an object
This is a bug which states that null is an object and one that unfortunately can’t be fixed because it would break the existing code of people.
*/ //!Document End