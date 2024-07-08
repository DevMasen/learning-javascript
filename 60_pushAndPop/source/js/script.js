//! SabzLearn
// var scores = [11, 19, 20, 16, 17]

// console.log(scores)

// // scores[5] = 13
// scores.push(14, 17, 10)

// console.log(scores)

// scores.pop()

// console.log(scores)

////////////////////  shift / unshift  //////////////////////////////////

var scores = [11, 19, 20, 16, 17]

// console.log(scores)

scores.shift()
// scores.shift()

// console.log(scores)

scores.unshift(10, 18, 14, 13)

// console.log(scores)

//? Excercise: اعدادی را به تعداد دلخواه از کاربر گرفته و داخل آرایه ای ذخیره کنید
//? و سپس میانگین آن ها را محاسبه کرده و نمایش دهید

//* Answer:
// let numArr = [];
// while(true){
//     let userNum = prompt("Enter Number (Exit -1): ","0");
//     if(userNum == undefined || userNum == ""){
//         break;
//     } else if(isNaN(+userNum)){
//         alert("Invalid Input!");
//         break;
//     } else{
//         if(+userNum != -1) numArr.push(+userNum);
//         else break;
//     }
// }
// sum = 0; 
// for (let i = 0; i < numArr.length; i++) {
//     sum += numArr[i]; 
// }
// if(numArr.length != 0){
//     alert("Average= "+sum/numArr.length);
// } 
//! SabzLearn End

//! My Notes
// let arr = ["Ali", "Mammad", "Reza"];
// console.log(arr);
// let userName = arr.pop();
// console.log(userName);
// console.log(arr);
// let userName2 = arr.shift();
// console.log(userName2);
// console.log(arr);
//! My Notes End

/* //!Document
*Stack:
There’s another use case for arrays – the data structure named stack.

It supports two operations:

push adds an element to the end.
pop takes an element from the end.
So new elements are added or taken always from the “end”.

A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top.

*Queue: 
A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

push appends an element to the end.
shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

*/ //!Document End