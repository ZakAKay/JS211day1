// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// DOES NOT WORK WHEN I GO LIVE

// Write a JavaScript program to convert a number to a string.
const numToString = ()=> {

  let convertNum = 10;

  let text = convertNum.toString();

  console.log(text)
  return text
}

// DOES NOT WORK ON REPLIT WHEN I HAVE LINE 18, WHATS THE POINT OF IT?

// Write a JavaScript program to convert a string to the number.
const strToNum = () => {

let convertString = "28"

//another variable to hold the number converted from the string

let newNum = parseInt(convertString);

  //console log to theck my work

console.log(newNum);
  
  //return the number
document.getElementById("string=number").innerHTML = newNum;
 
// return newNum

};


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

// get a value from a form input and put it in a variable

// if typof input variable is Boolean
//    return "it's a boolean"
// else if it's a null value (probably type null)
//   return "it's a null value"

let a = true 

let b = null

let c

let d = 33

let e = 33gh8

let f = "This is a string"

result = "a is " + a + "b is " + b

let result = `a is ${a} b is ${b}`
typeof"blue"
console.


// Write a JavaScript program that adds 2 numbers together.
// const num1 = parseInt(prompt('1'));
// const num2 = parseInt(prompt('2'));
// const sum = num1 + num2;
// console.log(`the sum of ${num1} and ${num2} is ${sum}`);

// OR

const num1 = 1
const num2 = 1

const sum = num1 + num2;
console.log(sum)

// Write a JavaScript program that runs only when 2 things are true.

const brownies = true;
const lemonbread = true;

 if (brownies == true && lemonbread == true) { 
  console.log("bothbrowniesandlemonbread")
}


// const icecream = true
// const brownies = true 

// const checkIfTrue = (icecream) =>{
//   if(icecream){
//     return "its true"
//   } else {
//     return "its not true"
//   }
// }
// console.log(checkIfTrue(icecream))
// const checkIfTrue = (brownies) =>{
//   if(brownies){
//     return "its true"
//   } else {
//     return "its not true"
//   }
// }

// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a JavaScript program that runs when both things are not true.

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
