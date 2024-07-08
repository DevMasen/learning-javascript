//! SabzLearn 
// var ages = [19, 13, 28, 32, 22]

// var isAll = ages.every(function (age) {

// 	console.log(age)
// 	return age > 18
// })

// console.log(isAll)

//? Exercise: فرض کنید پلتفرمی مثل تلگرام ساخته اید و چند نفر در آن یک گروه ایجاد کردند
//? و قصد ایجاد تماس کنفرانسی دارند
//? اما شرط لازم برای ایجاد تماس کنفرانسی بالای 18 سال بودن اعضای گروه است
//? اگر تمامی اعضا بالای 18 سال نبودند، اجازه ایجاد تماس کنفرانسی را ندهید

//* Answer:
// function addUser(userName, userAge, userPhoneNumber){
// 	return {
// 		userName,
// 		userAge,
// 		userPhoneNumber,
// 	};
// }

// let groupList = [
// 	addUser("Masen", 21, "+9339602368"),
// 	addUser("Mahdi", 46, "+9138443866"),
// 	addUser("Masomeh", 40, "+9137565906"),
// 	addUser("AmirAli", 15, "+9162086614"),
// ]

// if(confirm("Would you like too start a voicecall?")){
// 	let deniedMember = "";
// 	let isAgeValid = groupList.every(function(member){
// 		if(member.userAge < 18) {
// 			deniedMember = member.userName;
// 			return false;
// 		}
// 		return true;
// 	});
// 	if(isAgeValid) alert("Voicecall Starting...");
// 	else alert(`Member "${deniedMember}" is NOT alowed for voicecall!`);
// }
//! SabzLearn End

//! My Notes
let myArr = [
	"Masen",
	"Amir",
	"Mahdi",
	"Sina",
	"Yasin",
];

// let inc = myArr.includes("Yasin"); // true

// console.log(inc);

// let sme = myArr.some(function(user){
// 	console.log(user);
// 	if(user == "Mahdi") return true;
// 	return false;
// }); //true

// console.log(sme);

// let evr = myArr.every(function(user){
// 	console.log(user);
// 	if(user.length > 10) return false;
// 	return true;
// }); // false

// console.log(evr);

//*some : when reached true breaks and return true, else return false
//*every : when reaches false breaks and return false, else return true 

//! My Notes End


/* //!Document
*Description: 

The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array

*Syntax
array.every(function(currentValue, index, arr), thisValue)
Parameters
Parameter	Description
function()	Required.
A function to be run for each element in the array.
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
Boolean	true if all elements pass the test, otherwise false.

*/ //!Document End