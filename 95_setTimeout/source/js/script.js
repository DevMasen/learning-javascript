//! SabzLearn
// setTimeout(function (num1, num2) {
//     alert(num1 + num2)
// }, 2000, 8, 12)

//? Exercise:
//? فرض کنید سامانه‌ای پیاده سازی کرده اید که وقتی کاربر وارد سایت می شود، 5 ثانیه فرصت دارد عکسی را
//? برای پروفایل خود انتخاب کند، در غیر این صورت بهش یه پیغام برای آپلود عکس نمایش میدیم
//? راهنمایی
//? یه متغیر بولین در نظر بگیرین و طبق مقدار همین متغیر بعد از 5 ثانیه چک کنین که 
//? true
//? هست یا
//? false
//? و طبق نتیجه، پیغام لازم را نمایش دهید

//* Answer:

let uploadTimeout = true;

setTimeout(function(){
    uploadTimeout = false;
},5000)


let myInterval = setInterval(function(){
    console.log(uploadTimeout);
    if(uploadTimeout === false){
        alert("Please Upload Your Profile!");
        clearInterval(myInterval);
    }
},500)



//! SabzLearn End

//! My Notes
// let myTimeout = setTimeout(function(){
//     alert("TimeOut!");
// },10000)

// let i = 0
// let myInterval = setInterval(function(){
//     console.log(i);
//     i++;
//     if(i === 5) myTimeout;
//     if(i === 11) clearInterval(myInterval);
// },1000)


//! My Notes End

/* //! Document
*Window setTimeout():
Examples
Wait 5 seconds for the greeting:
const myTimeout = setTimeout(myGreeting, 5000);

Use clearTimeout(myTimeout) to prevent myGreeting from running:
const myTimeout = setTimeout(myGreeting, 5000);
function myStopFunction() {
  clearTimeout(myTimeout);
}

*Description:
The setTimeout() method calls a function after a number of milliseconds.
1 second = 1000 milliseconds.

*Notes:
The setTimeout() is executed only once.
If you need repeated executions, use setInterval() instead.
Use the clearTimeout() method to prevent the function from starting.
To clear a timeout, use the id returned from setTimeout():
myTimeout = setTimeout(function, milliseconds);
Then you can to stop the execution by calling clearTimeout():
clearTimeout(myTimeout);

*Syntax:
setTimeout(function, milliseconds, param1, param2, ...)
Parameters
Parameter	Description
function	Required.
The function to execute.
milliseconds	Optional.
Number of milliseconds to wait before executing.
Default value is 0.
param1,
param2,
...	Optional.
Parameters to pass to the function.
Not supported in IE9 and earlier.
Return Value
Type	Description
A number	The id of the timer.
Use this id with clearTimeout(id) to cancel the timer.

*/ //! Document End