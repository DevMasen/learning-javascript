//! SabzLearn
// var users = [
//   'ali',
//   'amin',
//   'amir',
//   'babak',
//   'sasan'
// ]

// users.forEach(function (user) {
//   // console.log(user)

// })


// var scores = [18, 19, 17, 20, 14]


// scores.forEach(function (number) {
//   console.log(number * 2)
// })

//? Exercise: دیتابیسی برای ذخیره اطلاعات کاربران داشته باشید (آرایه ای از آبجکت ها)
//? و سپس به کمک متد فورایچ، اطلاعات هر یوزر را به صورت جداگانه در کنسول نمایش دهید



//* Answer:

// let usersList = [
//   {
//     id : 1,
//     username : "Masen",
//     age : 21,
//   },
//   {
//     id : 2,
//     username : "Ali",
//     age : 18,
//   },
//   {
//     id : 3,
//     username : "Kamran",
//     age : 22,
//   },
// ]

// usersList.forEach(function (user){
//   console.log(`Username : ${user.username}  Age: ${user.age}`);
// })
//! SabzLearn End


/* //! Document
  *The JavaScript forEach method is one of the several ways to loop through arrays. Each method has different features, and it is up to you, depending on what you're doing, to decide which one to use.

In this post, we are going to take a closer look at the JavaScript forEach method.

Considering that we have the following array below:

const numbers = [1, 2, 3, 4, 5];
Using the traditional "for loop" to loop through the array would be like this:

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} 
What makes the forEach( ) method different?
The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".

The forEach method passes a callback function for each element of an array together with the following parameters:

Current Value (required) - The value of the current array element
Index (optional) - The current element's index number
Array (optional) - The array object to which the current element belongs
Let me explain these parameters step by step.

Firstly, to loop through an array by using the forEach method, you need a callback function (or anonymous function):

numbers.forEach(function() {
    // code
});
The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:

numbers.forEach(function(number) {
    console.log(number);
});
That's all we need to do for looping through the array:

Ads-z-2
Alternatively, you can use the ES6 arrow function representation for simplifying the code:

numbers.forEach(number => console.log(number));
Arrow Function Representation
Optional Parameters
Index
Alright now let's continue with the optional parameters. The first one is the "index" parameter, which represents the index number of each element.

Basically, we can see the index number of an element if we include it as a second parameter:

numbers.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
});
Ads-z-3
Array
The array parameter is the array itself. It is also optional and can be used if necessary in various operations. Otherwise, if we call it, it will just get printed as many times as the number of elements of the array:

numbers.forEach((number, index, array) => {
    console.log(array);
});
Ads-z
*/ //! Document End