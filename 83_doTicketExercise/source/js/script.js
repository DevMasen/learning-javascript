//! SabzLearn
// var cities = {
//     tehran: ['Tehran', 'Shahryar', 'rudehen', 'bumehen'],
//     shiraz: ['shiraz', 'fars', 'jamshid', 'shiraz pars'],
//     mashhad: ['Mashhad', 'Fariman', 'Guchan'],
//     tabriz: ['Tabriz', 'Marand', 'Jolfa', 'Ahar'],
// }

// var startProvine = prompt('Etnet The Provine: ')

// var mainProvinceCities = cities[startProvine]


// mainProvinceCities.forEach(function (city) {
//     console.log(city)
// });

//? Exercise: 
//? یک آزمون آنلاین پیاده سازی کنید
//? به این شکل که سوالاتی را به کاربر نمایش داده و پاسخ آن ها را دریافت کرده
//? و به ازای هر پاسخ درست، یک امتیاز به کاربر بدهید
//? در پایان آزمون، امتیاز کاربر را نمایش دهید

//* Answer : 
// function setQuestion(question="", rightAnswer=0){
//     return {
//         question,
//         rightAnswer,
//     }
// }

// let exam = [
//     setQuestion("Which tag uses to break to next line?"+
//         "\n1.<hr>\n2.<br>\n3.<b>\n4.<em>",2),
//     setQuestion("Which tag uses for creating a link?"+
//         "\n1.<q>\n2.<link>\n3.<i>\n4.<a>",4),
//     setQuestion("Which attribute uses for <img> tag to locate the image file?"+ "\n1.src\n2.href\n3.alt\n4.width",1),
//     setQuestion("Which CSS property uses for give a box inner space?"+
//         "\n1.margin\n2.border\n3.padding\n4.border-radius",3),
//     setQuestion("which CSS property uses for set color for a text?"+
//         "\n1.background-color\n2.border-color\n3.color\n4.scheme-color",3),
// ]

// let scores=0;
// let userChoise;

// exam.forEach(question => {
//     userChoise = +prompt(question.question);
//     if(isNaN(userChoise) || !(userChoise === 1 || userChoise === 2 || userChoise === 3 || userChoise === 4)){
//         alert("Invalid Choice ⚠️")
//     } else if(userChoise === question.rightAnswer){
//         alert("Correct Answer ✅");
//         scores++;
//     } else{
//         alert("Wrong Answer ❌\nRight Answer: "+question.rightAnswer);
//     }
// });

// alert("Your Score: "+scores+`/${exam.length}`);

//! SabzLearn End