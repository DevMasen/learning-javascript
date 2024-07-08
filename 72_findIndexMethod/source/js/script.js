//! SabzLearn
// var users = ['Ali', 'Amin', 'Amir', 'Babak', 'Hasan']

// var userIndex = users.findIndex(function (user) {
// 	console.log(user)
// 	return user == 'Babak'
// })

// console.log(userIndex)

// var users = [
// 	{id: 1, name: 'Ali', age: 19},
// 	{id: 2, name: 'Amin', age: 21},
// 	{id: 3, name: 'Amir', age: 25},
// 	{id: 4, name: 'Babak', age: 20},
// ]

// var userIndex = users.findIndex(function (user) {
// 	return user.name === 'Amin'
// })

// console.log("Index: ", userIndex)

//? Exercise: پروژه فروشگاه را در نظر بگیرید
//? محصولات فروشگاه را داخل آرایه ای ذخیره کرده و آرایه ای برای سبد خرید در نظر بگیرید
//? و داخل سبد خرید 3 محصول بطور دیفالت قرار دهید
//? منویی را به کاربر نمایش دهید که شامل 2 گزینه است
//? گزینه ای برای حذف محصول از سبد خرید
//? و گزینه ای برای اضافه کردن محصول به سبد خرید
//? عملیات لازم برای هر گزینه را پیاده سازی کنید

//* Answer:
// function setNewProduct(productID, productName, productPrice) {
//   return {
//     productID,
//     productName,
//     productPrice,
//   };
// }

// let websiteProductDB = [
//   setNewProduct(0, "iphone 15 promax", 3000),
//   setNewProduct(1, "ipad 17 pro", 4500),
//   setNewProduct(2, "macbook imac12", 5700),
//   setNewProduct(3, "macbook imac13", 6600),
//   setNewProduct(4, "laptop cover", 150),
//   setNewProduct(5, "laptop glass", 100),
//   setNewProduct(6, "mobile cover", 50),
//   setNewProduct(7, "mobile glass", 20),
// ];

// let userBasket = [];
// userBasket.push(websiteProductDB[3]);
// userBasket.push(websiteProductDB[6]);
// userBasket.push(websiteProductDB[7]);

// let userOption = prompt("Enter 0 for add Product\nEnter 1 for remove product");

// if (userOption === null) {
//   console.log(userBasket);
// } else if (isNaN(+userOption)) {
//   alert("Invalid Input!");
// } else if (+userOption != 0 && +userOption != 1) {
// 	alert("Invalid Number!");
// } else if(+userOption === 0){
// 	let requestedProduct = prompt("Enter Product Name: ");
// 	if(requestedProduct === null){
// 		console.log(userBasket);
// 	} else{
// 		let isProductExist = websiteProductDB.some(function(product){
// 			if(product.productName === requestedProduct.toLowerCase()){
// 				userBasket.push(product);
// 				return true;
// 			} return false;
// 		});
// 		if(isProductExist) {
// 			alert("Product Add To Your Basket Successfuly!");
// 			console.log(userBasket);
// 		} else alert("Product NOT Found!");
// 	}
// } else if(+userOption === 1){
// 	let removeRequest = prompt("Enter Product Name: ");
// 	if(removeRequest === null){
// 		console.log(userBasket);
// 	} else{
// 		let productIndex = userBasket.findIndex(function(product){
// 			return product.productName === removeRequest.toLowerCase();
// 		})
// 		if(productIndex != -1){
// 			userBasket.splice(productIndex,1)
// 			alert("Product Deleted Successfuly!");
// 			console.log(userBasket);
// 		} else {
// 			alert("Product NOT Found!");
// 		}
// 	}
// }


//! SabzLearn End

//! My Notes

// let numbers = [3,17,94,25,10,12,10,23,10,3,10,23];

// let trashIndex = 0;
// while(trashIndex != -1){
// 	trashIndex = numbers.findIndex(function(num){
// 		return (
// 			num === 10 || num === 3
// 		);
// 	})
// 	if(trashIndex != -1){
// 		numbers.splice(trashIndex,1);
// 	}
// }
// console.log(numbers);

//* ناموسا خدا منم :|
//! My Notes End

/* //!Document
*Description:
The findIndex() method executes a function for each array element.

The findIndex() method returns the index (position) of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array.

*Syntax
array.findIndex(function(currentValue, index, arr), thisValue)
Parameters
Parameter	Description
function()	Required.
A function to be run for each array element.
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
Number	The index of the first element that passes the test.
Otherwise -1.
*/ //!Document End
