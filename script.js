/*1. Concatenating words together such as first and last name.
         Change the code shown below to be a String Concat Method*/


let coffee = "French";

let flavor = "Vanilla";

let space = " " ;

console.log( coffee.concat(space, flavor));


/*2. Templating where we insert variables into a string to create a dynamic string
       Write the proper syntax to have the console.log method show the the following using templating:



I have 3 coffees.

I also have 10 chais.

I have  a total of 13 drinks total.
*/

let coffee = 3;

let chai = 10;

console.log(`I have ${coffee} coffees.`);

console.log(`I also have ${chai} chais.`);

console.log(`I have a total of ${chai + coffee} drinks total. ` );



/* Searching the String on content!
indexOf String Method: Find where 42 occurs*/

function myFunction() {

  let str = "Can you guess what is the index of 42 is? I am sure you will be surprised!";

  let answer = str.indexOf("42");

console.log(answer);

};

myFunction();


/*length method: Find how long the string is!*/

function myFunction() {

  let str = "Can you guess how long this string is? I am sure you will be surprised! (Hint:It is not 42.)";

  let answer =  str.length;

console.log(answer);

};

myFunction();


/*Replacing values in a string.*/

function myFunction() {

  let str1 = "How you doin?";

  let str2 =  str1.replace("o","u");

console.log(str2);

};

myFunction();

/*Using Trim Method for strings.*/

function myFunction() {

  var str = "         SOCIAL DISTANCING!!!                    ";

  alert(str.trim());

};

myFunction();


/* Making strings case sensitive
toUpperCase*/

function myFunction() {

  let str = "social distancing!!";

  let res = str.toUpperCase();

  console.log(res);

}; 

myFunction();


/*toLowerCase*/

function myFunction() {

  let str = "QuiEt VoICeS...PLEASE";

  let res =  str.toLowerCase();

  console.log(res);

}

myFunction();

