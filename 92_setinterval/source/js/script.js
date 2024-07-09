//! SabzLearn
// var i = 10

// var timer = setInterval(function () {
//     // Coeds

//     if (i === 0) {
//         // clean interval
//         alert('Game Over')
//         clearInterval(timer)
//     }
    
//     console.log(i)
//     i--
// }, 1000)

// 1000ms = 1s

//? Exercise:
//? یک تایمر پیاده سازی کنید
//? به طوری که از کاربر میزان ثانیه و دقیقه را دریافت کرده و تایمری را با اطلاعات وارد شده استارت بزنید
//? و زمانی که تایمر تمام شد، پیغام مناسبی نمایش داده شود

//* Answer:
// let miniutes = +prompt("Enter minutes: ");
// let seconds = +prompt("Enter seconds: ");


// let timer = setInterval(function(){
//     if(seconds === -1){
//         seconds = 59;
//         miniutes--;
//     }
//     if(miniutes === 0 && seconds === 0){
//         alert("You Are Dead 💀")
//         clearInterval(timer);
//     }
//     console.clear();
//     console.log(`You Will Be Dead in ${Math.floor(miniutes/10)}${miniutes%10}:${Math.floor(seconds/10)}${seconds%10} 😈`);
//     seconds--;

// },100);
 
//! SabzLearn End


/* //!Document
*Window setInterval()

Examples
Display "Hello" every second (1000 milliseconds):

setInterval(function () {element.innerHTML += "Hello"}, 1000);

Call displayHello every second:

setInterval(displayHello, 1000);


*Description
The setInterval() method calls a function at specified intervals (in milliseconds).

The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

1 second = 1000 milliseconds.

*Note
To execute the function only once, use the setTimeout() method instead.

To clear an interval, use the id returned from setInterval():

myInterval = setInterval(function, milliseconds);
Then you can to stop the execution by calling clearInterval():

clearInterval(myInterval);



*Syntax
setInterval(function, milliseconds, param1, param2, ...)
Parameters
Parameter	Description
function	Required.
The function to execute
milliseconds	Required.
The execution interval.
If the value is less than 10, 10 is used
param1, param2, ...	Optional.
Additional parameters to pass to the function
Not supported in IE9 and earlier.
Return Value
Type	Description
A number	The id of the timer.
Use this id with clearInterval() to cancel the timer.

*/ //!Document End
