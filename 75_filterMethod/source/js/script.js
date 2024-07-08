//! SabzLearn
// var scores = [18, 19, 16, 20, 14, 12]

// var filteredScores = scores.filter(function (score) {
//   return score > 18
// })

// console.log("filteredScores: ", filteredScores)

//////////////////////////////

// var userNames = ["Ali", "Amin", "Amir", "roz", "Babak"];

// var filteredUserNames = userNames.filter(function (username) {
//   return username.length > 3;
// });

// console.log("filteredUserNames: ", filteredUserNames);

//? Exercise:یک پروژه فروشگاه آنلاین پیاده سازی کنید
//? به این صورت که یک آرایه به عنوان سبد خرید کاربر در نظر بگیرید که 6 محصول به طور دیفالت دارد
//? سیاست کاری فروشگاه به این شکل است که برای محصولاتی که بالای 100 هزار تومان باشند، از مشتری هزینه پست دریافت نمی شود
//? اما محصولاتی که زیر 100 هزار تومان قیمت داشته باشند، برای هر کدام 1000 تومان هزینه ارسال (هزینه پست) دریافت میشه
//? لطفا قیمت کل سبد خرید را همراه با هزینه پست محاسبه کرده و به کاربر نمایش دهید

//* Answer:
function setNewProduct(productID, productName, productPrice, postPrice) {
  return {
    productID,
    productName,
    productPrice,
    postPrice,
  };
}

let websiteProductDB = [
  setNewProduct(0, "book1", 100,0),
  setNewProduct(1, "book2", 95,0),
  setNewProduct(2, "book3", 125,0),
  setNewProduct(3, "book4", 150,0),
  setNewProduct(4, "book5", 85,0),
  setNewProduct(5, "book6", 89,0),
  setNewProduct(6, "book7", 130,0),
  setNewProduct(7, "book8", 50,0),
  setNewProduct(8, "book9", 140,0),
  setNewProduct(9, "book10", 170,0),
  setNewProduct(10, "book11", 99,0),
  setNewProduct(11, "book12", 200,0),
  setNewProduct(12, "book13", 159,0),
  setNewProduct(13, "book14", 199,0),
  setNewProduct(14, "book15", 250,0),
  setNewProduct(15, "book16", 60,0),
  setNewProduct(16, "book17", 112,0),
  setNewProduct(17, "book18", 70,0),
  setNewProduct(18, "book19", 128,0),
  setNewProduct(19, "book20", 78,0),
];

let userBasket = [];
userBasket.push(websiteProductDB[0]);
userBasket.push(websiteProductDB[1]);
userBasket.push(websiteProductDB[2]);
userBasket.push(websiteProductDB[3]);
userBasket.push(websiteProductDB[4]);
userBasket.push(websiteProductDB[5]);



let userRegularProducts = userBasket.filter(function(product){
  if(product.productPrice < 100){
    product.postPrice = 1;
    return true;
  } return false;
})

let postTotalPrice = userRegularProducts.length * 1;

totalPrice = 0;
userBasket.forEach(element => {
  totalPrice += element.productPrice;
});

console.log(userBasket);
console.log(`Products Price: ${totalPrice}\nPostPrice: ${postTotalPrice}\nTotal Price: ${totalPrice+postTotalPrice}`);



//! SabzLearn End

//! My Notes

//! My Notes End

/* //!Document
*Description:
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

*Syntax: 
array.filter(function(currentValue, index, arr), thisValue)
Parameters
Parameter	Description
function()	Required.
A function to run for each array element.
currentValue	Required.
The value of the current element.
index	Optional.
The index of the current element.
arr	Optional.
The array of the current element.
thisValue	Optional. Default undefined
A value passed to the function as its this value.
Return Value
Type	Description
Array	An array of elements that pass the test.
An empty array if no elements pass the test.
*/ //!Document End
