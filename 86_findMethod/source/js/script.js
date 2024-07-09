//! SabzLearn
// var users = [
//     {id: 1, name: 'Ali', age: 21},
//     {id: 2, name: 'Amin', age: 19},
//     {id: 3, name: 'Amir', age: 26},
//     {id: 4, name: 'Babak', age: 28},
// ]

// var mainUserData = users.find(function (user) {
//     return user.name === 'Amin'
// })

// console.log(mainUserData)

//? Exercise:
//? فرض کنید در سامانه ای که راه اندازی کرده اید، کاربری پسوردش رو فراموش کرده
//? و شما از کاربر یوزرنیم رو میگیرین و پسوردش رو بهش نمایش میدین
//? اگر کاربری با یوزرنیم وارد شده در دیتابیس شما وجود نداشت، به کاربر پیغام متناسب را نمایش دهید

//* Answer: 
// function setUser(userName="", password=""){
//     return {
//         userName,
//         password,
//     };
// }

// let users = [
//     setUser("masen","@Mrmohseni"),
//     setUser("mahdi","@Mrkarimi"),
//     setUser("yasin","@Mrsistani"),
//     setUser("sina","@Mrnouroozi"),
//     setUser("amir","@MrRostampoor"),
// ]
// let requestedUser = {};

// let userNameInput = prompt("Enter Your Username: ","");
// if(userNameInput === null){
//     console.log("Operation Canceled!");
// } else{
//     requestedUser = users.find(function(user){
//         return user.userName.toLowerCase() === userNameInput.toLowerCase();
//     });
//     if(requestedUser != undefined){
//         alert("Your Password is: "+ requestedUser.password)
//     } else{
//         alert("User NOT Found!");
//     }
// }

//! SabzLearn End

//! My Notes
// let myStr = "1341234";
// console.log(typeof -myStr);
//! My Notes End


/* //!Document
*JavaScript Array find():

Example 1
Find the value of the first element with a value over 18:

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}

*Description:

The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.


*Syntax: 
array.find(function(currentValue, index, arr),thisValue)
Parameters
function()	Required.
A function to run for each array element.
currentValue	Required.
The value of the current element.
index	Optional.
The index of the current element.
arr	Optional.
The array of the current element.
thisValue	Optional. Default undefined.
A value passed to the function as its this value.
Return Value
Type	Description
A value	The value of the first element that pass the test.
Otherwise it returns undefined.
Example 2
Find the value of the first element with a value above a specific number:

<p><input type="number" id="ageToCheck" value="18"></p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
const ages = [4, 12, 16, 20];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}
</script>

*/ //!Document End