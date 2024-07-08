//! SabzLearn
// var scores = [19, 51, 90, 76, 54, 32, 51]

// var number = 19

// var username = 'Amin/amir/ali'

// console.log(Array.isArray(number))

// console.log(scores.indexOf(51))
// console.log(scores.lastIndexOf(51))
// console.log(scores.slice(2, 5))
// console.log(scores.join('')) // '19/51/90/'
// console.log(scores.reverse())

// console.log(username.split('/'))

//? Exercise: کلمه ای از کاربر دریافت کرده و چک کنید که کلمه وارد شده از هر دو سمت چپ و راست به یک صورت خوانده
//? می شود یا خیر
//? به عنوان مثل کلمه
//? gig
//? از هر دو طرف به یک صورت خوانده می شود
// let userWord = prompt("Enter a Word: ", "");

// if (userWord != null) {
//   let userWordArr = userWord.toLowerCase().split("");
//   let reversedArr = userWordArr.reverse();
//   reversedWord = reversedArr.join("");
//   if (reversedWord === userWord.toLowerCase()) alert("True");
//   else alert("False");
// }

//* Answer:

//! SabzLearn End

//! My Notes
// let userName = 'Masen';
// console.log(userName.split('a'));
// let userEmail = 'mohammadwh400@gmail.com';
// let emailParts = userEmail.split('@');
// console.log(emailParts);
// let domainName = emailParts[0];
// let hostName = emailParts[1];
// console.log(domainName);
// console.log(hostName);

// let users = [
//     "Masen",
//     "Ali",
//     "Hossein",
//     "Reza",
//     "12",
//     12
// ]
// console.log(users.indexOf("12"));
// users.splice(users.indexOf("Reza"),1);
// console.log(users);

// console.log(users.slice(users.indexOf("Hossein")));

// console.log(users.join('.'));

// let emailAddressParts = [
//     "example",
//     "@",
//     "email",
//     ".",
//     "com"
// ]
// console.log(emailAddressParts);
// let emailAddress = emailAddressParts.join('')
// console.log(emailAddress);
// //Start Recycling...
// let emailNameServer = emailAddress.split('@')
// console.log(emailNameServer);
// let emailDomainHost = emailNameServer[1].split('.')
// console.log(emailDomainHost);
// let emailAddressPartsRecycle = [
//     emailNameServer[0],
//     "@",
//     emailDomainHost[0],
//     ".",
//     emailDomainHost[1],
// ]
// console.log(emailAddressPartsRecycle);

// let myName = "Masen";
// console.log(myName.split(''));
//! My Notes End
