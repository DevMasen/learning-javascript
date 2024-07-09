//! SabzLearn
// var allQuestions = [
//     {id: 1, title: '2 + 2', answer: '4'},
//     {id: 2, title: '2 * 4', answer: '8'},
//     {id: 3, title: '7 ** 2', answer: '49'},
//     {id: 4, title: '12 / 4', answer: '3'},
//     {id: 5, title: '100 / 25', answer: '4'},
//     {id: 6, title: '100 * 2', answer: '200'},
//     {id: 7, title: 'Cpaital Of Iran?', answer: 'tehran'},
// ]

// var score = 0

// var mainAnswer = ''
// allQuestions.forEach(function (question) {
//     mainAnswer = prompt(question.title + ' ?')

//     if (mainAnswer === question.answer) {
//         score++
//     }
// })

// alert('Your Final Score: ' + score)

//? Exercise:
//? یک پروژه ماشین حساب پیاده سازی کنید
//? به این صورت که 2 عدد را همراه با عملیات لازم (ضرب، تقسیم و ...) از کاربر دریافت کرده و عملیات دلخواه کاربر را روی اعداد ورودی اعمال کنید و حاصل را نمایش دهید

//* Answer:
// function checkValidation(userInput){
//     if(userInput === null) return false;
//     return true;
// }

// let validation;
// let operator;
// let secondNumber;
// let result;

// let firstNumber = prompt("Enter First Number: ","0");
// validation = checkValidation(firstNumber);


// if(validation){
//     operator = prompt("Enter The Operatior ( + , - , * , / , ^ , % ) :","");
//     validation = checkValidation(operator);
// } 

// if(validation){
//     secondNumber = prompt("Enter Second Number","0");
//     validation = checkValidation(secondNumber)
// }


// if(!validation){
//     console.log("Operation Canceled!");
// } else if(isNaN(firstNumber) || isNaN(secondNumber)){
//     validation = false;
//     alert("Invalid Input for Numbers!");
// }

// if(validation){
//     switch(operator){
//         case '+':
//             result = +firstNumber + +secondNumber;
//             alert(`${firstNumber} + ${secondNumber} = ${result}`);
//             break;
//         case '-':
//             result = +firstNumber - +secondNumber;
//             alert(`${firstNumber} - ${secondNumber} = ${result}`);
//             break;
//         case '*':
//             result = +firstNumber * +secondNumber;
//             alert(`${firstNumber} * ${secondNumber} = ${result}`);
//             break;
//         case '/':
//             result = +firstNumber / +secondNumber;
//             alert(`${firstNumber} / ${secondNumber} = ${result}`);
//             break;
//         case '^':
//             result = (+firstNumber) ** (+secondNumber);
//             alert(`${firstNumber} ^ ${secondNumber} = ${result}`);
//             break;
//         case '%':
//             result = +firstNumber % +secondNumber;
//             alert(`${firstNumber} % ${secondNumber} = ${result}`);
//             break;
//         default:
//             alert("Operation NOT recognized!");
//     }
// }
//! SabzLearn End