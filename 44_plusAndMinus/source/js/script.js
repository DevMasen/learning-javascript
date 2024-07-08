//! Sabz Learn
var number1 = 0

// number1++
// number1++

// ++number1
// ++number1

// number1--
// --number1

// var number2 = number1++
// var number2 = ++number1

// var number2 = --number1
var number2 = number1--

// console.log("number1: ", number1) // -1
// console.log("number2: ", number2)  // 0
//! Sabz Learn End

//! My Notes
var x = 0;
var y = x+=1;
// console.log(x); // 1
// console.log(y); // 1
//! My Notes End


/* //! Document
Prefix vs. Postfix
Prefix: ++someNum
Postfix: someNum++
At first glance, it may seem like a syntactic preference; similar to that of generators, where you can define one by writing function* generator() {} or function *generator() {}. Contrary to intuition, there are subtle differences in how each works, specifically in what each returns.

DISCLAIMER: For the rest of the article, I shall only use increment operators for the sake of brevity. It should be implied from here on out that what is true for increment operators is also true for decrement operators.

Both operators still do what their syntax implies: to increment. Regardless of prefix or postfix, the variable is sure to be incremented by 1. The difference between the two lies in their return values.

The prefix increment returns the value of a variable after it has been incremented.
On the other hand, the more commonly used postfix increment returns the value of a variable before it has been incremented.
Prefix increment
let prefix = 1;
console.log(++prefix); // 2
console.log(prefix); // 2

Postfix increment
let postfix = 1;
console.log(postfix++); // 1
console.log(postfix); // 2
To remember this rule, I think about the syntax of the two. When one types in the prefix increment, one says ++x. The position of the ++ is important here. Saying ++x means to increment (++) first then return the value of x, thus we have ++x. The postfix increment works conversely. Saying x++ means to return the value of x first then increment (++) it after, thus x++.
*/ //! Document End

