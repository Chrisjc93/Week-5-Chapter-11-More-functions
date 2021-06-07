// 11.1.1. Functions Are Data


// The data type of the type conversion function Number is function. In fact, all functions are of type function.
console.log(typeof 42);
console.log(typeof "LC101");
console.log(typeof Number);

function hello() {

   // function body

}

let helloFunc = hello;

// 11.2. Anonymous Functions
// function (parameter1, parameter2, parameterN) {

//    // function body

// }

// Anonymous functions are often assigned to variables when they are created, which allows them to be called using the variable's name.

let add = function(a, b) {
   return a + b;
}; // notice how we have a semi colon here because it is an assignment statement so you need itm even tho its a function.

console.log(add(1, 1));

let reverse = function(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

console.log(reverse(`christopher`));

let f1 = function(str) {
   return str + str;
};

let f2 = f1;

f1("abcd1");
f2("abcd2"); // only one of them will show up, you can do either, but both wont work

const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
if (userInput < 0) {
   logger("Invalid input");
}

// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.

function printMessage() {
   console.log("The future is now!");
}

setTimeout(printMessage, 5000);


// The function printMessage is passed to setTimeout the same as any other argument.

// A common twist often used by JavaScript programmers is to use an anonymous function as an argument.

// This program has the same behavior as the one above. Instead of creating a named function and passing it to setTimeout, it creates an anonymous function within setTimeout's argument list.

setTimeout(function () {
   console.log("The future is now!");
}, 5000);

// 1.3.2. Example: The Array Method map
// The array method map allows for every element in an array to be mapped or translated, using a given function. Here's how to use it:

// let mappedArray = someArray.map(functionName);
// When the map method executes, the following actions occur:

// The first element in someArray is passed into functionName as an argument.
// functionName executes and returns a new value.
// The return value is added to mappedArray.
// Steps 1 - 3 repeat for each element in someArray.
// When complete, mappedArray, contains each of the individual return values from the mapping function, functionName.


let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
   return n*2;
};

let doubled = nums.map(timesTwo);

console.log(nums);
console.log(doubled);
// When using map, many programmers will define the mapping function anonymously in the same statement as the method call map.

//This program has the same output as the one immediately above. The mapping function is defined anonymously within the call to map.
let doubled2 = nums.map(function (n) {
   return n*2;
});

console.log(doubled2);

// 11.4.1. Example: A Generic Input Validator


function getValidInput(prompt, isValid) {

   // Prompt the user, using the prompt string that was passed
   let userInput = input.question(prompt);

   // Call the boolean function isValid to check the input
   while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
   }

   return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
   return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven)); //smilar to the map example above, finish the program below to halve each number in an array.
// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function (n){
  return n / 2;
});

console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake"];
// Use the map method to map an array of strings. For each name in the array, map it to the first initial.
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (s){
  for (let i = 0; i < s.length; i++){
    return s[i];
  }
});

console.log(firstInitials);

 // we're reusing the first method and passing a new to check pw lengths.
let isValidPassword = function(password) {

   // Passwords should have at least 8 characters
   if (password.length < 8) {
      return false;
   }

   return true;
};

console.log(getValidInput('Create a password:', isValidPassword));

let isInputA = function(inputA){
  if(inputA.indexOf(`a`) === 0 || inputA.indexOf(`A`) === 0){
    return true;
  } else {
    return false;
  }
};

console.log(getValidInput('Enter a word beinging with "a": ', isInputA));
// -------------------------------------------------------------------------------------------------------
let isInputVowel = function(inputV){
  let vowels = ['a','e','i','o','u','y'];
  //for(let i = 0; i < vowels.length; i++){
    if(vowels.includes(inputV[0])){
      return true;
    } else {
      return false;
    }
  //} 
};

console.log(getValidInput('Enter a word beinging with a vowel: ', isInputVowel));

// this is a simple file logger: reach chapter 11.4.2.1 on it

// let fileLogger = function(msg) {

//    // Put the message in a file

// }



// function logError(msg, logger) {
//    let errorMsg = 'ERROR: ' + msg;
//    logger(errorMsg);
// }

// logError('Something broke!', fileLogger);

// this i a more complex logger: 

let fileLogger = function(msg) {

   // Put the message in a file

}

let consoleLogger = function(msg) {

   console.log(msg);

}

function logError(msg, loggers) {

   let errorMsg = 'ERROR: ' + msg;

   for (let i = 0; i < loggers.length; i++) {
      loggers[i](errorMsg);
   }

}

logError('Something broke!', [fileLogger, consoleLogger]);

// 11.6.1.1. Functions Can Call Other Functions

function addTwoToNumber(num){
   return num += 2;
}

function addFiveToNumber(value){
   let result = addTwoToNumber(value) + 3;
   return result;
}

console.log(addFiveToNumber(12))



let arr = ['L', 'C', '1', '0', '1'];
let newString = '';

for (i = 0; i < arr.length; i++){
   newString = newString + arr[i];
}

console.log(newString);
console.log(arr);

while (arr.length > 0){
   newString += arr[0];
   arr.shift();
}
console.log(newString);
console.log(arr);




function removeI(arr) {
    if (arr.indexOf('i')===-1){ // !arr.includes('i') works as the basecase
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));

//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  while (checkIfNumber(integer) === false){
  if (integer === 1){
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}
}


function checkIfNumber(input){
  if(typeof(input) == "string" || input !== Math.floor(input) || input < 0){
    console.log(`Please enter a whole integer`);
    return true;
  } else {
    return false;
  }
}


console.log(factorial(4));

function combineEntries(arrayName){
   if (arrayName.length <= 1){
      return arrayName[0];
   } else {
      console.log(arrayName[0], arrayName.slice(1));
      return arrayName[0]+combineEntries(arrayName.slice(1));
   }
}

//First, run the code to see the result.

//Next, uncomment the console.log statement above to see how each call to combineEntries looks at a different section of the original array.

let arr = ['L', 'C', '1', '0', '1'];

console.log(combineEntries(arr));

function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      return integer + (decreasingSum(integer-1));
   }
}

console.log(decreasingSum(5));

//Create an anonymous fucntion and set it equal to a variable.
// let anonFunction = function(input){
//   if(typeof(input) === "string"){
//     return `ARRR!`;
//   } else if (typeof(input) === "number"){
//     return input * 3;
//   } else {
//     return input;
//   }
// };

// console.log(anonFunction('2'));


/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let arr = ['Elocution', 21, 'Clean teeth', 100];


let anonFunction = arr.map(function(input){
  if(typeof(input) === "string"){
    return `ARRR!`;
  } else if (typeof(input) === "number"){
    return input * 3;
  } else {
    return input;
  }
});

console.log(anonFunction);