//! Sabz Learn 
var text = "I Love JavaScript"

// console.log(text[0])
// console.log(text.charAt(2))
// console.log(text.charCodeAt(0)) // Ascii | اسکی
// console.log(text + " & React")
// console.log(text.concat(" & React"))
var finalText = text.concat(" & React")
// console.log(finalText)
// console.log(text.trim())
// console.log(text.toUpperCase())
// console.log(text.search("react"))
// console.log(text.indexOf("Love"))
// console.log(text.includes("react")) // bool => true | false

//? Exercise 1:
//? یک سیستم لاگین پیاده سازی کنید
//? به این صورت که از کاربر یوزرنیم رو میگیرین و چک می کنین لاگین هست یا نه
//? فقط کاربر با یوزرنیم
//? ali
//? میتونه لاگین کنه
//? نکته: این پروژه نباید به حروف کوچیک و بزرگ حساس باشد
//* Answer:
// var userName = prompt("Enter Username: ");
// if(userName.toLowerCase() == "ali"){
//     alert("Successfuly logged in :)");
// } else{
//     alert("Username is incorrect!");
// }


//? Exercise 2:
//? تفاوت متد های
//? search و indexOf
//* Answer :
/*
در زبان برنامه‌نویسی جاوااسکریپت، دو متد `search()` و `indexOf()` برای جستجوی رشته‌ها استفاده می‌شوند، اما تفاوت‌هایی با هم دارند:

1. **متد `search()`**:
   - این متد یک الگوی عبارات باقاعده (Regular Expression) را به عنوان ورودی می‌پذیرد.
   - نتیجه‌ی این متد، اندیس اولین تطابق با الگوی داده شده است. اگر تطابقی پیدا نشود، مقدار `-1` برمی‌گردد.
   - به عنوان مثال:
     ```javascript
     let str = "Hello, world!";
     let result = str.search(/world/);
     console.log(result); // خروجی: 7
     ```

2. **متد `indexOf()`**:
   - این متد یک رشته را به عنوان ورودی می‌پذیرد.
   - نتیجه‌ی این متد، اندیس اولین وقوع رشته داده شده است. اگر رشته‌ای پیدا نشود، مقدار `-1` برمی‌گردد.
   - همچنین می‌توان پارامتر دومی به این متد داد تا جستجو را از آن اندیس شروع کند.
   - به عنوان مثال:
     ```javascript
     let str = "Hello, world!";
     let result = str.indexOf("world");
     console.log(result); // خروجی: 7
     ```

**تفاوت‌های اصلی**:
- `search()` از عبارات باقاعده (Regular Expressions) پشتیبانی می‌کند، در حالی که `indexOf()` فقط با رشته‌های معمولی کار می‌کند.
- `indexOf()` قابلیت شروع جستجو از یک اندیس مشخص را دارد، اما `search()` این قابلیت را ندارد و همیشه از ابتدای رشته جستجو را آغاز می‌کند.

این تفاوت‌ها باعث می‌شوند که هر کدام از این متدها برای کاربردهای خاص خود مناسب باشند.
*/
//! Sabz Learn End

//! My Notes
var str1 = "Hello 3 from true str1\nwellcome!"

// console.log(str1.search(/Hello/);
// console.log(str1.indexOf("Hello"));
//! My Notes End