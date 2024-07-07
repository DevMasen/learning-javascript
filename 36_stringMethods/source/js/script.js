//! Sabz Learn
// var userName = 'js' 

// var firstIndex = userName[0]

// alert(firstIndex) // index

// alert(userName.length)

// alert(userName[4])

//? Excercise: یک برنامه ثبت نام بنویسید
//? به این شکل که کاربر برای ثبت نام در سایت باید یوزرنیم و پسورد را ثبت کند
//? محدودیت موجود این است که یوزرنیم حداقل باید 3 کاراکتر و پسورد حداقل باید 8 کاراکتر داشته باشد
//? در غیر این صورت پیغام مناسب را به کاربر نمایش دهید
//? (: موفق باشید 

//* Answer:
//* method 1:
// var userName = prompt("Enter your username: ");
// if(userName.length >= 3){
//     alert("Username successfuly set :)");
// } else {
//     alert("Error: Username must be 3 character at least!");
// }
// var userPassword = prompt("Enter password: ");
// userPassword.length >= 8 ? alert("Password successfuly set :)") : alert("Error: Password must be 8 character at least!");

//* method 2:
// var userName = prompt("Enter your username: ");
// var userPassword = prompt("Enter your password: ");

// function checkUsernamePassword(name="", password=""){
//     if(name.length < 3){
//         alert("Error: Username should be 3 character at least! :(");
//         return;
//     }

//     if(password.length < 8){
//         alert("Error: Password should be 8 character at least! :(")
//         return;
//     } 
//     alert(`Username & Password set successfuly :)\nUsername: ${name}\nPassword: ${password}`);
// }

// checkUsernamePassword(userName, userPassword)

//! Sabz Learn End

//! My Notes
var myString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qui maiores, quis a, eligendi id blanditiis nesciunt rem ducimus accusantium dicta quam obcaecati. sit sit Impedit nisi numquam voluptates! Accusamus, facilis dicta. ";
var mySecondString = "masen";
var myThirdString = "masen";
var myForthString = "amir";
var myFifthString = "sen";
var mySixthString = "bannana";
var mySeventhString = "Hello and how are you?";
var myEighthString = "MASeN";
var myNinethString = "     Ma sen    ";
var num1 = 1381;
// alert(myString.at()) // L
// alert(myString.charAt(6)) // i
// alert(myString.charCodeAt(22)) // 97
// alert(myString.codePointAt(4)) // 109
// alert(myString.concat("Maaaaaaaasen"," 21"))// `${myString} Maaaaaaaasen 21`
// alert(String.constructor) // function String() { [native code] } 
// alert(myString.endsWith(' ')) // true
// alert(String.fromCharCode(122)) // z
// alert(myString.includes('qui')) // true
alert(myString.indexOf('nisim') +" "+ myString.indexOf('sit')) //-1 18
// alert(myString.lastIndexOf('.')) // 223
// alert(myString.length) // 225
// alert(mySecondString.localeCompare(myThirdString) + " " + mySecondString.localeCompare(myForthString) + " " + mySecondString.localeCompare(myFifthString)) //0 1 -1
// alert(myString.match('ajksbn') + " " + myString.match('qui')) //null qui
// alert(mySecondString.padEnd(10,"\\")) // masen\\\\\
// alert(mySecondString.padStart(10,'\\')) // \\\\\masen
// alert(mySecondString.repeat(5)) // masenmasenmasenmasenmasen
// alert(mySecondString.replace('m','M')) // Masen
// alert(myString.replaceAll(' ','*')) 
// alert(mySixthString.replaceAll('na','go')) // bangogo
alert(mySixthString.search('na')) // 3
// alert(mySeventhString.slice(1,4)) // ell
// alert(mySeventhString.slice(6)) //and how are you?
// alert(mySeventhString.split(' ')) //Hello,and,how,are,you?
// alert(myThirdString.startsWith('m')) //true
// alert(mySeventhString.substring(0,5)) // Hello
// alert(myEighthString.toLocaleLowerCase()) //masen
// alert(myThirdString.toLocaleUpperCase()) //MASEN
// alert(false.toString()) //false
// alert(myNinethString.trim()) //Ma sen
//! My Notes End

/* //! Document
*1. at() -------------> Returns an indexed character from a string

*2. charAt() ---------> Returns the character at a specified index (position)

*3. charCodeAt() -----> Returns the Unicode of the character at a specified index

*4. codePointAt() ----> Returns the Unicode value at an index (position) in a string

*5. concat() ---------> Returns two or more joined strings

*6. constructor	------> Returns the string's constructor function

*7. endsWith() -------> Returns if a string ends with a specified value

*8. fromCharCode() ---> Returns Unicode values as characters

*9. includes() -------> Returns if a string contains a specified value

*10. indexOf() -------> Returns the index (position) of the first occurrence of a value in a string

*11. lastIndexOf() ---> Returns the index (position) of the last occurrence of a value in a string

*12. length ----------> Returns the length of a string

*13. localeCompare() -> Compares two strings in the current locale

*14. match() ---------> Searches a string for a value, or a regular expression, and returns the matches

*15. padEnd() --------> Pads a string at the end

*16. padStart() ------> Pads a string from the start

*17. prototype -------> Allows you to add properties and methods to an object

*18. repeat() --------> Returns a new string with a number of copies of a string

*19. replace() -------> Searches a string for a pattern, and returns a string where the first match is replaced

*20. replaceAll() ----> Searches a string for a pattern and returns a new string where all matches are replaced

*21. search() --------> Searches a string for a value, or regular expression, and returns the index (position) of the match

*22. slice() ---------> Extracts a part of a string and returns a new string

*23. split() ---------> Splits a string into an array of substrings

*24. startsWith() ----> Checks whether a string begins with specified characters

*25. substring() -----> Extracts a number of characters from a string, from a start index (position)

*26. toLocaleLowerCase() -> Returns a string converted to lowercase letters, using the host's locale

*27. toLocaleUpperCase() -> Returns a string converted to uppercase letters, using the host's locale

*28. toLowerCase() ---> Returns a string converted to lowercase letters

*29. toUpperCase() ---> Returns a string converted to uppercase letters

*30. toString() ------> Returns a string or a string object as a string

*31. trim() ----------> Returns a string with removed whitespaces

*32. trimEnd() -------> Returns a string with removed whitespaces from the end

*33. trimStart() -----> Returns a string with removed whitespaces from the start

*34. valueOf() -------> Returns the primitive value of a string or a string object


*Note
All string methods return a new value.
They do not change the original variable.


*/ //! Document End