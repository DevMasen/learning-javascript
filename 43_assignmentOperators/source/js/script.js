//! Sabz Learn
var number = 10

// number += 5 // number = number + 5

// console.log(number)

// number -= 8 // number = number - 3

// number *= 3 // number = number * 3

// number /= 2 // number = number / 2

// number **= 2 // number = number ** 2

// number++ // number += 1 // number = number + 1
// ++number
// number++

number--
--number

// console.log(number)

//? Exercise: در مورد تفاوت های حالتی که -- و ++ پشت یا مقابل متغیر قرار می گیرند، سرچ و مطالعه کنید
//* Answer:
var i = 0;
// console.log(`i before assignment : ${i}\n`); // 0
var j = i++;
// console.log(`i after first assignment : ${i}\n`); // 1
// console.log(`j : ${j}\n`); // 0
var k = ++i;
// console.log(`i after second assignment : ${i}\n`); // 2
// console.log(`k: ${k}\n`); // 2

/* //*ChatGPT 
در زبان جاوا اسکریپت، دو عملگر `i++` و `++i` تفاوت‌های مهمی دارند که باید به آن‌ها توجه شود:

1. **`i++` (پس‌افزاینده):**
   - مقدار اصلی متغیر `i` را بازمی‌گرداند و سپس مقدار `i` را یک واحد افزایش می‌دهد.
   - به عبارت دیگر، ابتدا مقدار فعلی `i` استفاده می‌شود و بعد از آن، `i` یک واحد افزایش پیدا می‌کند.

   مثال:
   ```javascript
   let i = 5;
   let j = i++; // j برابر 5 می‌شود و سپس i برابر 6 می‌شود
   ```

2. **`++i` (پیش‌افزاینده):**
   - مقدار `i` را یک واحد افزایش می‌دهد و سپس مقدار جدید `i` را بازمی‌گرداند.
   - به عبارت دیگر، ابتدا `i` افزایش پیدا می‌کند و بعد مقدار جدید `i` استفاده می‌شود.

   مثال:
   ```javascript
   let i = 5;
   let j = ++i; // i برابر 6 می‌شود و سپس j برابر 6 می‌شود
   ```

تفاوت‌های این دو عملگر در جاوا اسکریپت بسیار مهم است، به ویژه زمانی که این عملگرها در عبارات پیچیده‌تر و یا در حلقه‌ها استفاده می‌شوند.
*/
//! Sabz Learn End

//! My Notes
var str1 = "Hello";
// console.log(str1+=", World!");
var bool1 = true;
// console.log(bool1&&=true);
// console.log(bool1||= true);
// console.log(bool1??"null");

//! My Notes End