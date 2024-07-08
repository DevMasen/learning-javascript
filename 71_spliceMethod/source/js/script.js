//! SabzLearn
// var numbers = [10, 18, 19, 22, 20, 90, 87, 54, 32]

// numbers.splice(2, 4, 5, 6, 7)

// console.log(numbers)
//! SabzLearn End

//! My Notes
let myArr = [
  "Masen",
  24,
  true,
  {
    name: "Ali",
    age: 18,
  },
  12,
  13,
  14,
];

myArr.splice(0,0,"Start");
myArr.splice(5,3,"End");
// console.log(myArr);

let myArr2 = [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
// myArr2.splice(0,1,"A1","A2");
// myArr2.splice(-1,0,11);
// console.log(myArr2);

// plice(Start Index,
//       Delete Count,
//       Items...)
//! My Notes End

/* //!Document
*Description:
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

*Syntax: 
array.splice(index, count, item1, ....., itemX)
Parameters
Parameter	Description
index	Required.
The index (position) to add or remove items.
A negative value counts from the end of the array.
count	Optional.
Number of items to be removed.
item1, ...,	Optional.
The new elements(s) to be added.
Return Value
Type	Description
Array	An array containing the removed items (if any).

*/ //!Document End
