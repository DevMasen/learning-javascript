//! SabzLearn
// var usersData = [
// 	{id: 1, name: 'Ali', age: 19},
// 	{id: 2, name: 'Amin', age: 21},
// 	{id: 3, name: 'Amir', age: 18},
// ]

// // console.log(usersData.includes({id: 1, name: 'Ali', age: 19}))

// var isInUsers = usersData.some(function (user) {
// 	// Codes
// 	console.log(user)
// 	return user.name == 'Mohammad'
// })

// console.log(isInUsers)

//? Exercise: یک فروشگاه آنلاین پیاده سازی کنید
//? به این شکل که محصولات فروشگاه خود را در دیتابیسی ذخیره کرده (آرایه) و آرایه ای برای سبد خرید کاربر داشته باشید
//? و از کاربر اسم محصولی را که قصد اضافه کردن به سبد خرید دارد ، دریافت کنید
//? اگر محصول درخواستی کاربر در انبار فروشگاه شما موجود بود، آن را به سبد خرید کاربر اضافه کنید
//? و سپس مبلغ کل سبد خرید را محاسبه کرده و به کاربر نمایش دهید
//? و در غیر این صورت به کاربر پیغام اتمام موجودی نمایش دهید
//? :نکات قابل توجه
//? بعد از اضافه محصول به سبد خرید کاربر، سبد را در کنسول نمایش دهید
//? به طور دیفالت 3 محصول با قیمت های مختلف در سبد خرید کاربر موجود باشد

//* Answer:
// function setNewProduct(productID, productName, productPrice, productIsExist) {
//   return {
//     productID,
//     productName,
//     productPrice,
//     productIsExist,
//   };
// }

// let websiteProductDB = [
//   setNewProduct(0, "iphone 15 promax", 3000, true),
//   setNewProduct(1, "ipad 17 pro", 4500, true),
//   setNewProduct(2, "macbook imac12", 5700, false),
//   setNewProduct(3, "macbook imac13", 6600, true),
//   setNewProduct(4, "laptop cover", 150, true),
//   setNewProduct(5, "laptop glass", 100, false),
//   setNewProduct(6, "mobile cover", 50, true),
//   setNewProduct(7, "mobile glass", 20, true),
// ];

// let userBasket = [];
// userBasket.push(websiteProductDB[3]);
// userBasket.push(websiteProductDB[6]);
// userBasket.push(websiteProductDB[7]);

// while (true) {
//   let userRequestProduct = prompt("Enter Product Name:");

//   if (userRequestProduct == null) {
//     break;
//   } else if (userRequestProduct.length < 3) {
//     alert("Please Try Again!");
//     continue;
//   } else {
//     let isProductValid = websiteProductDB.some(function (product) {
//       if (product.productName == userRequestProduct.toLowerCase()) {
//         if (product.productIsExist) {
//           userBasket.push(product);
//           return true;
//         }
//       }
//       return false;
//       // return product.productName == userRequestProduct;
//     });
//     if (isProductValid) {
//       alert("Product Add to Basket Successfuly!");
// 	  let sumPrice = 0;
// 	  console.log("Updated User Basket: ");
// 	  userBasket.forEach(element => {
// 		  console.log(element);
// 		  sumPrice += element.productPrice;
// 	  });
// 	  console.log("Total Price: "+sumPrice+"$");
//       continue;
//     } else {
//       alert("Product NOT Exist!");
//       continue;
//     }
//   }
// }

//! SabzLearn End

/* //! Document
*Description
The some() method checks if any array elements pass a test (provided as a callback function).

The some() method executes the callback function once for each array element.

The some() method returns true (and stops) if the function returns true for one of the array elements.

The some() method returns false if the function returns false for all of the array elements.

The some() method does not execute the function for empty array elements.

The some() method does not change the original array.

Syntax
array.some(function(value, index, arr), this)
Parameters
Parameter	Description
function	Required.
A function to run for each array element.
Function parameters:
value	Required.
The value of the current element.
index	Optional.
The index of the current element.
arr	Optional.
The array the current element belongs to.
this	Optional. Default undefined.
A value passed to the function to be used as its "this" value.
Return Value
Type	Description
A boolean	true if any of the aray elements pass the test, otherwise false.
*/ //! Document End
