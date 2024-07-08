//! SabzLearn
// var isLogin = false

// if (!isLogin) {
//     console.log('User Logged In')
// }

// if () {

// }

//? Exercise:
//? یک پروژه تودولیست پیاده سازی کنید
//? به این صورت که یک آرایه ای برای ذخیره تودوها داشته باشید و به طور دیفالت 3 تودو داخل آن ذخیره کنید
//? هر تودو مشخصاتی مثل آیدی، اسم تودو و وضعیت را دارد
//? :منویی به 3 گزینه به صورت زیر به کاربر نمایش دهید
//? 1. اضافه کردن تودو
//? 2. حذف تودو
//? 3. انجام تودو (تغییر وضعیت)
//? در قسمت اول اسم تودویی را از کاربر دریافت کرده و به لیست تودوها اضافه کنید
//? در قسمت دوم اسم تودویی را از کاربر دریافت کرده و آن را از لیست تودوها حذف کنید
//? در قسمت سوم اسم تودو را دریافت کرده و همان تودو را در وضعیت انجام شده قرار دهید
//? در پایان هر کدام از عملیات‌ها، لیست تودوها را در کنسول نمایش دهید

//* Answer:
// function setToDo(id = 0, ToDoName = "", ToDoStatus = false) {
//   return {
//     id,
//     ToDoName,
//     ToDoStatus,
//   };
// }

// let userToDos = [
//   setToDo(0, "English Practice", false),
//   setToDo(1, "Reading Book", false),
//   setToDo(2, "Type Practice", false),
// ];

// let generatedId = userToDos.length;
// let userOption = 0;
// let todoAddName = "";
// let todoRemoveName = "";
// let todoIndex = -1;
// let todoNameForStatus = "";
// let todoFound = false;

// mainLoop: while (true) {
//   userOption = prompt(
//     "Enter Your Option:\n1.Add ToDo\n2.Remove ToDo\n3.Set Done\n4.Show TODO "
//   );

//   switch (userOption) {
//     case "1":
//       todoAddName = prompt("Enter TODO Text: ", ""); ////////
//       if (todoAddName === null) {
//         break mainLoop;
//       } else {
//         userToDos.push(setToDo(generatedId, todoAddName));
//         generatedId++;
//         alert("TODO Added Successfuly!");
//         console.clear();
//         console.log(userToDos);
//         continue mainLoop;
//       }
//     case "2":
//       todoRemoveName = prompt("Enter TODO Text: ", ""); //////////////
//       if (todoRemoveName === null) {
//         break mainLoop;
//       } else {
//         todoIndex = userToDos.findIndex(function (todo) {
//           return todo.ToDoName.toLowerCase() === todoRemoveName.toLowerCase();
//         });
//         if (todoIndex != -1) {
//           userToDos.splice(todoIndex, 1);
//           alert("TODO Removed Successfuly!");
//           console.clear();
//           console.log(userToDos);
//           continue mainLoop;
//         } else {
//           alert("TODO NOT Found!");
//           continue mainLoop;
//         }
//       }
//     case "3":
//       todoNameForStatus = prompt("Enter TODO Text: ", ""); /////////////
//       if (todoNameForStatus === null) {
//         break mainLoop;
//       } else {
//         userToDos.forEach(function(todo){
//             if(todo.ToDoName.toLowerCase() === todoNameForStatus.toLowerCase()){
//                 todo.ToDoStatus = true;
//                 todoFound = true;
//             }
//         })

//         if(!todoFound) {
//             alert("TODO NOT Found!");
//             continue mainLoop;
//         }
//         else{
//             alert("Status Checked Successfully!");
//             console.clear();
//             console.log(userToDos);
//             continue mainLoop;
//         }
//       }
//     case "4":
//         console.clear();
//         userToDos.forEach(todo => {
//             console.log(`ID:${todo.id}  Name:${todo.ToDoName}  Status:${todo.ToDoStatus}\n`);
//         });
//         continue mainLoop;
//     case null:
//       break mainLoop;
//     default:
//       alert("Invalid Input!");
//   }
// }

//! SabzLearn End


/* //!Document
*Use === Comparison:
 Do
0 === "";
1 === "1";
1 === true;
The === operator forces comparison of values and type.

 Don't
0 == "";
1 == "1";
1 == true;
The == comparison operator always converts (to matching types) before comparison.

*Don't Use new Object(): 
 Do
var x1 = {};
var x2 = "";
var x3 = 0;
var x4 = false;
var x5 = [];
var x6 = /()/;
var x7 = function(){};
 Don't
var x1 = new Object();
var x2 = new String("");
var x3 = new Number(0);
var x4 = new Boolean(false);
var x5 = new Array();
var x6 = new RegExp();
var x7 = new Function();

*Declare Variables Outside of the For Statement:
 Do
var container = document.getElementById('container');
for(var i = 0, len = someArray.length; i < len;  i++) {
   container.innerHtml += 'my number: ' + i;
   console.log(i);
}
Notice how we must determine the length of the array for each iteration, and how we traverse the dom to find the "container" element each time -- highly inefficient!

 Don't
for(var i = 0; i < someArray.length; i++) {
  var container = document.getElementById('container');
  container.innerHtml += 'my number: ' + i;
  console.log(i);
}
When executing lengthy "for" statements, don't make the engine work any harder than it must

*Always end your switch statements with a default. Even if you think there is no need for it.
 Do
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  default:
    day = "Unknown";
}
 Don't
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
}

*Use Array push instead of direct assignment to add items to an array.
 Do
const someStack = [];
someStack.push('abracadabra');
 Don't
const someStack = [];
someStack[someStack.length] = 'abracadabra';
*/ //!Document End
