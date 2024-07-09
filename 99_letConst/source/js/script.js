//! SabzLearn
// var let const = ثابت

// var num1 = 10

// num1 = 20

// var num1 = 20

// let num1 = 12

// num1 = 27

// let num1 = 35

// console.log(num1)

/////////////////////////////////////////

// num1 = 10

// console.log(num1)

// let num1

//////////////////////////////////////// Scope ناحیه

// let num1 = 20 // global scope

// {
    //     let num1 = 30  // block scope
    //     console.log(num1)
    // }
    
    // console.log(num1)
    

    /////////////////////////////////////////////
    
    
    // let username = 'ali'
    // let age = 25
    
    // if (age > 18) {
        //     let username = 'amin'
        // }
        
        // console.log(username)
        
        //////////////////////////////////////
        
        const num1 = 120
        
        num1 = 10
        
        console.log(num1)
        
        //////////////////////////////////
        
//! SabzLearn End


/* //!Document
*JavaScript Let:
The let keyword was introduced in ES6 (2015)
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope


*Block Scope:
Before ES6 (2015), JavaScript did not have Block Scope.
JavaScript had Global Scope and Function Scope.
ES6 introduced the two new JavaScript keywords: let and const.
These two keywords provided Block Scope in JavaScript:

Example : 
Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here


*Global Scope:
Variables declared with the var always have Global Scope.
Variables declared with the var keyword can NOT have block scope:

Example
Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}
// x CAN be used here


*Cannot be Redeclared:
Variables defined with let can not be redeclared.
You can not accidentally redeclare a variable declared with let.

With let you can not do this:
let x = "John Doe";
let x = 0;

Variables defined with var can be redeclared.

With var you can do this:
var x = "John Doe";
var x = 0;


*Redeclaring Variables:
Redeclaring a variable using the var keyword can impose problems.
Redeclaring a variable inside a block will also redeclare the variable outside the block:

Example
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2

Redeclaring a variable using the let keyword can solve this problem.
Redeclaring a variable inside a block will not redeclare the variable outside the block:

Example
let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10


*Difference Between var, let and const:

Scope	Redeclare	Reassign	Hoisted	Binds this
var	      No	     Yes	     Yes	 Yes	Yes
let	      Yes	     No	         Yes	 No	    No
const	  Yes	     No	         No	     No	    No

*What is Good?:
let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.

*What is Not Good?:
var does not have to be declared.
var is hoisted.
var binds to this.

*/ //!Document End
        
        
        
        


        