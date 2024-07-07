// !Sabz Learn
var num1 = 3;
var num2 = 4;

var num3 = num1 * num2;

// switch (num3) {
//   case 10:
//     alert("نام3 برابره با 10");
//     break;
//   case 11:
//     alert("نام3 برابره با 11");
//     break;
//   case 12: // true
//   case 15:
//     alert("نام3 برابره با 12 یا 15");
//     break;
//     case 13:
//     alert("نام3 برابره با 13");
//     break;
//     case 14:
//     alert("نام3 برابره با 14");
//     break;
//   default:
//     alert("نام3 برابر با هیچکدومش نیست :(");
//     break;
// }

//? Excercise: معدل کاربر را دریافت کرده و سپس سطح او را تعیین کنید
//? A برای معدل 18 الی 20 سطح
//? B برای معدل 15 الی 17 سطح
//? C برای معدل 12 الی 14 سطح
//? معدل کمتر از 12 مشروط میشه :(

//* Answer:
// let avg = +prompt("معدل خود را وارد کنید :");
// switch(Math.floor(avg)){
//   case 18:
//   case 19:
//   case 20:
//     alert("سطح A");
//     break;
//   case 15:
//   case 16:
//   case 17:
//     alert("سطح B");
//     break;
//   case 12:
//   case 13:
//   case 14:
//     alert("سطح C");
//     break;
//   default:
//     alert("مشروط"); 
// }



// !Sabz Learn End

// !My Notes
//? Write the code using if..else which would correspond to the following switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
//* Answer :
// var browser = "Safari";
// if (browser === "Edge") {
//   alert("You've got the Edge! ");
// } else if (
//   browser === "Chrome" ||
//   browser === "FireFox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

//? Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

//* Answer:
// let a = +prompt('a?', '');
// switch(a){
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }

// !My Notes End