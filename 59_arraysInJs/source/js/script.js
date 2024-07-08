//! SabzLearn
// var students = [10, "mohammad", true, "babak"]
var students = ['ali', "mohammad", 'amin', "babak"]

// console.log(students)
// console.log(students.length)
// console.log(students[10])
//! SabzLearn End

//! My Notes
students[4] = "Masen";

// console.log(students[4]);
students[-1] = "AmirAli";
// console.log(students);
// console.log(students.length);
// console.log(students[-1]);
var arr = ["Masen", 21, {maried:false}, function workHard(){} ];
// console.log(arr.at(-1));
// console.log(arr.at(-2));

//! My Notes End


/* //!Document
*Declaration : 
There are two syntaxes for creating an empty array:

let arr = new Array();
let arr = [];

*Get last elements with “at” : 
A recent addition
This is a recent addition to the language. Old browsers may need polyfills.
Let’s say we want the last element of the array.

Some programming languages allow the use of negative indexes for the same purpose, like fruits[-1].

Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.

We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum
A bit cumbersome, isn’t it? We need to write the variable name twice.

Luckily, there’s a shorter syntax: fruits.at(-1):

let fruits = ["Apple", "Orange", "Plum"];

same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum
In other words, arr.at(i):

is exactly the same as arr[i], if i >= 0.
for negative values of i, it steps back from the end of the array.

*/ //!Document End