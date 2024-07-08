//! Sabz Learn
// var userNumber = null
// var sum = 0

// for (var i = 0 ; i < 5 ; i++) {
// 	userNumber = Number(prompt('Enter The ' + (i + 1) +  ' Number:'))
	
// 	sum = sum + userNumber
// }


// console.log("Average: " + (sum / 5))

//? Exercise:عددی را از کاربر دریافت کرده و سپس مجموع رقم های آن را محاسبه کنید.
//? :به عنوان مثال برای عدد 142 به صورت زیر محاسبه می شود
//? 1 + 4 + 2 = 7

//* Answer:
//* Method 1:
// let userNumber = prompt("Enter Number: ","0");
// sumDigit = 0;
// for (let i = 0; i < userNumber.length; i++) {
// 	sumDigit += +userNumber[i];	
// }
// alert("The digits sum = " + sumDigit);

//* Method 2: 
// let userNumber = prompt("Enter Number","0");
// let sumDigits = 0;
// let number = +userNumber;
// for (let i = 0; i < userNumber.length; i++) {
// 	sumDigits += number % 10;
// 	number = Math.floor(number/10);
// }
// alert("The digits sum = " + sumDigits);
//! Sabz Learn End