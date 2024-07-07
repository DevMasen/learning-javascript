//! Sabz Learn
var text = "I Love JavaScript & React"

// slice
// substr
// substring

// console.log(text.slice(7, 17))
// console.log(text.substr(7, 10))
// console.log(text.substring(7, 17))

//? Excercise: در مورد تفاوت متد های زیر سرچ و مطالعه کنید
//? slice | substr | substring

//* Answer:
/*
تفاوت‌های اصلی
اندیس‌های منفی:

substring(): اندیس‌های منفی را به 0 تبدیل می‌کند.
slice(): اندیس‌های منفی را از انتهای رشته محاسبه می‌کند.
substr(): اندیس‌های منفی از انتهای رشته به سمت عقب محاسبه می‌شوند.
پارامترهای ورودی:

substring(): (startIndex, endIndex)
slice(): (startIndex, endIndex)
substr(): (start, length)
رفتار با اندیس‌های معکوس:

substring(): اگر startIndex بزرگ‌تر از endIndex باشد، آن‌ها را جا‌به‌جا می‌کند.
slice(): اگر startIndex بزرگ‌تر از endIndex باشد، رشته خالی برمی‌گرداند.
substr(): با length کار می‌کند و به این مسئله توجه نمی‌کند.
این تفاوت‌ها باعث می‌شوند که هر کدام از این متدها برای کاربردهای خاص خود مناسب باشند.
*/
//! Sabz Learn End

//! My Notes
// console.log(text[0]);
//! My Notes End