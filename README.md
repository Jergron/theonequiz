# One Quiz to Rule Them All

> **Instructions:**
>
> Fork this repository into your Github account. Any questions that require you to answer in your own words, but not write code (e.g. question 12) just edit this README with your answer.

## Setup

```
cd lib && bower install
cd ..
http-server
```

## Basics

> For this section, I wrote some starter DOM elements in the `index.html` file.

1. Write a selector that selects only the first sibling li elements.
2. Make all li elements behave as inline elements.
3. Only the odd section elements should have a border.
4. Only the even li elements should have a lime background.
5. Only the first aside element in the 2nd section should have blue font color.
6. There are three div elements with instructions inside them about which side of the screen they should be displayed on. Follow those instructions.
7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".
8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".

## JavaScript concepts
1. Explain what hoisting is. Provide your answer below.

[Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting):
  >In JavaScript, functions and variables are hoisted. Hoisting is JavaScript's behavior of moving declarations to the top of a scope (the global scope or the current function scope).

>That means that you are able to use a function or a variable before it has been declared, or in other words: a function or variable can be declared after it has been used already

```
foo = 2
var foo;

// is implicitly understood as:

var foo;
foo = 2;
```

1. What is a callback? Why do we use them in JavaScript? Provide your answer, and code a simple example below.

[Callback](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_and_Using_Callbacks):
  >A callback is declared by using ctypes.FunctionType. The first argument is the calling convention, the second argument is the return type, and the third is an array of arguments the callback expects.

 >The return type of the javascript callback must match the return type declared, otherwise js-ctypes will through an error saying "unexpectd return type".
 
Example
This callback that returns boolean and has two arguments.

```
var myFuncTypeDeclaration = ctypes.FunctionType(ctypes.default_abi, ctypes.boolean, [ctypes.int, ctypes.voidptr_t]);

function myJSCallback(cInt, cPtr) {
    return true; // as the return of the FunctionType was ctypes.boolean we must make our javascript callback return boolean otherwise js-ctypes will throw error saying unexpected type return
}

var myCCallback = myFuncTypeDeclaration.ptr(myJSCallback);
```
 

## Functions and operators

> In `main.js` do the following:

1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

## Arrays

> In the `main.js`, I started you off with a simple array.

1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

## IIFE

1. In the file named `IIFE.js`. Write an IIFE that defines a global variable named **FruitMaker**. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".
1. The IIFE should expose in its public interface a getter named `getFruits()` that returns all fruits, and a setter named `addFruit()` that provides the ability to add a new fruit to the array.
1. In the file named `AugmentedIIFE.js`, augment **FruitMaker** with a function named `slices()` that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.

  For example: `slices("apples", 2)` should return `["apples", "apples"]`

## XHR

1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.
1. What are the four HTTP verbs that you can use in an XHR that correspond to the CRUD actions (create, read, update, delete)?

  PUT, GET, POST, DELETE

1. Why did we use Promises when dealing with asynchronous XHR calls?

  > A Promise is a placeholder object that represents the result of an async operation. This object will hold the information about the status of the async operation and will notify us when the async operation succeeds or fails.

1. Provide a simple example of the syntax for handling a Promise.
  ```
  asyncCall()
.then(function(data1){
    // do something...
    return anotherAsyncCall();
})
.then(function(data2){
    // do something...  
    return oneMoreAsyncCall();    
})
.then(function(data3){
   // the third and final async response
})
.fail(function(err) {
   // handle any error resulting from any of the above calls    
})
.done();

```

## Scope and this

What gets logged to the console when the following code executes? Explain why.

"42", because the value is declared in global scope. The other _answer_ variables that are declared inside the both the function's scope will not be hoisted up to global, but only defined inside the function itself. To call the value "0" you could rewrite it this way:
```
var answer;

function steve() {
  luke();
}

function luke() {
  answer = "0";
  greg(answer);
}

function greg(answer) {
  answer = "666";
  console.log( this.answer );
}

steve();
```
To call the value "666" you could rewrite the code this way:

```
var answer;

function steve() {
  luke();
}

function luke() {
  answer = "0";
  greg();
}

function greg() {
  answer = "666";
  console.log( this.answer );
}

steve();
```

#### NSS ORIGINAL QUIZ CODE: 
```
var answer = "42";

function steve() {
  luke();
}

function luke() {
  var answer = "0";
  greg(answer);
}

function greg(answer) {
  var answer = "666";
  console.log( this.answer );
}

steve();
```

