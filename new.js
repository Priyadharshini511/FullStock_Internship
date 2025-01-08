// // var data = "value";
// // data = 1;
// // data=true;
// // data = [1,2,3,4];
// // data = {key:1};
// // console.log(data);
// // var itsString="hello world";
// // console.log(itsString.length);
// // console.log(itsString.trim());
// // console.log(itsString.split());
// // console.log("fnhg");

// /* -- BASIC DECLARATION -- */
// /*
// var data = "value";
// data = 1
// data = true
// data = [1,2,3,4]
// data={key:1}
// console.log(data); // here the last declared data value will be displayed

// */
// var itsstring="hello there";
// console.log(itsstring.length);
// console.log(itsstring.split());
// console.log(itsstring.trim());
// console.log("str"+"1");






// // numbers
// var num = 123.45
// console.log(Number.parseInt(num))
// var str = "123"
// console.log(typeof Number(str))
// console.log(typeof + str)


// //math
// var intval = 123.4
// var intval2 = 123.7
// console.log(Math.round(intval))   //123
// console.log(Math.round(intval2))  //124
 
// console.log(Math.ceil(intval))    //124
// console.log(Math.ceil(intval2))   //124

// console.log(Math.floor(intval))   //123
// console.log(Math.floor(intval2))  //123

// console.log(Math.min(1,2,5,6,3))  //1
// console.log(Math.max(1,2,5,6,3))  //6

// console.log(Math.random()*100)   // 9.703680058038898

// var boolval = false;
// console.log(boolval);

// //null
// var datatype = null;

// //array
// var arrayV = [1,"hi",{onj:1}];
// console.log(
// arrayV[0])

// console.log(arrayV);

// arrayV.unshift(20);
// arrayV.shift();
// console.log(arrayV);

// var datavar = "hello";
// //olleh
// datavar=datavar.split("");
// datavar=datavar.reverse();
// datavar=datavar.join("");
// console.log(datavar);

      //iteration
//for(CSSStyleDeclaration,condition,inc/dec)
// for(var i=0;i<5;i++){
//     console.log(i);
// }

// for(var j=5;j>0;j--){
//     console.log(j);
// }

//while
// var i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// var i=5;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// do{
//     console.log("hello");
// }while(false);

// ["apple","orange","pineapple","mango"].forEach((i,k)=>{
//     console.log(k,i);
// })

// if(true){
//     console.log("true statement");
// }else{
//     console.log("flase block")
// }

// if(0){
//     console.log("true statement");
// }
// else if(2){
//     console.log("block 2 passed")
// }
//     else{
//     console.log("flase block")
// }

var character = 'a'
// if(character=='a'){
//     console.log("yes")
// }
// else if(character=='b'){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// switch(character){
//     case 'a':
//         console.log("character a")
//         break;
//     case 'b':
//         console.log("character b")
//         break;
//     default:
//         console.log("nothing")
// }
// var character = prompt("enter the value");
// character=character??'b'
// switch(character){
//     case character=='a':
//         case character=='b':
//             case character=='c':
//                 console.log("yes")
//                 break
//                 default:
//                     console.log("no")
        
// }

//ternary operator
//var=condition?true:false
// var samplevar = 'c';
// samplevar=samplevar=='a'?true:samplevar=='b'?true:false;
// console.log(samplevar);

// var val = 10
// function hello(){
//     console.log(val);
// }
// hello()

// console.log(eval(1+2-3+"7"));

//func_name(){}
// function sayHello(){
//       console.log("hello there");
// }

// sayHello();

// function multiple( x, y){
//       console.log(x*y);
// }
// multiple(5,6);

// function multiply(x,y){
//       return x * y;
// }
// // var answer = multiply(5,4);
// // console.log(answer);

// //method overloadibg
// function multiply(x,y,z){
//       return x * y * z;
// }
// var answer = multiply(5,4,6);
// console.log(answer);


// var check = 10;

// var check = "string";
// console.log(check);
// var check1 = 10;
// var check1 = 20;
// console.log(check1);

// const varname = 24
// // varname = 36
// console.log(varname);

//let /const varName=(par)=>{return}

// const addValue=(v1,v2) =>v1+v2;
// console.log(addValue(1,2));

// var arr=[2,3,4,5,5]
// var sum=0;
// for(var i = 0;i<5;i++){
//       sum += arr[i];
// }
// console.log(sum)

// const addelement = (arr) =>{
//       let sum = 0
//       arr.forEach(i => {
//             sum+=i
//       })
//       return sum
// }

// console.log(addelement([1,2,3,5,6]));
let arr = [1,2,3,4,5]
// let compute = arr.map(i=>i+1)
// console.log(compute);
// console.log(arr);

// let compute=arr.filter(i=>i<4)
// console.log(compute)

// let compute=arr.filter(i=>i%2 != 0)
// console.log("odd number",compute)

// let compute1 = arr.filter(i=> i%2 == 0)
// console.log("even  numbers",compute1)

// let compute = arr.every(i=>i<5)
// console.log(compute)

// let testobj = {name:"john",age:23};
// console.log(testobj)
// console.log(testobj.name)

// let {name:mo,age} = testobj
// console.log(mo,age)

// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1,6,7]
// console.log(arr2);

// function rest(...value){

// }

// const testobj = {name:"john",age:23};
// Object.freeze(testobj)
// testobj.name = "doe"
// console.log(testobj);


// Sample program to demonstrate Array and String methods in JavaScript

// Array of strings
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // 1. Array methods
// console.log("Original array:", fruits);

// // a. Add an item at the end (push)
// fruits.push("fig");
// console.log("After push:", fruits);

// // b. Remove the first item (shift)
// const removedFruit = fruits.shift();
// console.log("After shift:", fruits);
// console.log("Removed fruit:", removedFruit);

// // c. Find index of a specific element (indexOf)
// const index = fruits.indexOf("cherry");
// console.log("Index of 'cherry':", index);

// // d. Sort the array alphabetically
// fruits.sort();
// console.log("Sorted array:", fruits);

// // e. Reverse the array
// fruits.reverse();
// console.log("Reversed array:", fruits);

// // f. Filter items containing more than 5 characters
// const longFruits = fruits.filter(fruit => fruit.length > 5);
// console.log("Fruits with more than 5 characters:", longFruits);

// // g. Map to convert all fruits to uppercase
// const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log("Uppercase fruits:", upperCaseFruits);

// // 2. String methods
// const sentence = "  JavaScript is a versatile programming language.  ";
// console.log("\nOriginal sentence:", sentence);

// // a. Trim spaces from the beginning and end
// const trimmedSentence = sentence.trim();
// console.log("Trimmed sentence:", `"${trimmedSentence}"`);

// // b. Convert to uppercase
// const upperCaseSentence = trimmedSentence.toUpperCase();
// console.log("Uppercase sentence:", upperCaseSentence);

// // c. Replace a word
// const replacedSentence = trimmedSentence.replace("versatile", "powerful");
// console.log("Replaced sentence:", replacedSentence);

// // d. Split into words
// const words = trimmedSentence.split(" ");
// console.log("Words in the sentence:", words);

// // e. Check if the sentence includes a word
// const includesWord = trimmedSentence.includes("JavaScript");
// console.log("Does the sentence include 'JavaScript'?", includesWord);

// // f. Get a substring
// const substring = trimmedSentence.substring(0, 10);
// console.log("Substring (first 10 characters):", substring);

// // Combining Array and String methods
// // Concatenate the fruits array into a single string
// const fruitsString = fruits.join(", ");
// console.log("\nFruits as a string:", fruitsString);

// // Split the concatenated string back into an array
// const splitFruits = fruitsString.split(", ");
// console.log("Split back into an array:", splitFruits);

//           setTimeout
// const sayHello=()=>{
//       setTimeout(()=>{
//             console.log("hello");
//       },5000);

// }

// const saybye=()=>{
//       console.log("Bye")
// }

// sayHello()
// saybye()

// let i = 0
// const interval = setInterval(()=>{
//       console.log("hello world");
//   },3000)

//   if(i==3)
//       clearInterval(interval)

// let takeTicket = new Promise((resolve, reject) => {
//       if (true) {
//             resolve("yes booked");
//       } else {
//             reject("not yet");
//       }
// });

// let takeTicket1 = new Promise((resolve, reject) => {
//       if (true) {
//             resolve("full filled");
//       } else {
//             reject("rejected");
//       }
// });

// takeTicket
//       .then((e) => {
//             console.log(e);
//       })
//       .catch((err) => {
//             console.log(err);
//       });

// Promise.all([takeTicket, takeTicket1])
//       .then((e) => {
//             console.log(e);
//       })
//       .catch((e) => {
//             console.log(e);
//       });

// Promise.allSettled([takeTicket, takeTicket1])
//       .then((e) => {
//             console.log(e);
//       })
//       .catch((e) => {
//             console.log(e);
//       });

//async,await  
// const data = () => {  
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       response=await response.json()
//       console.log(response);  
// };

// data()
//       .then((e) => {
//             console.log("Response:", e);
//             return e.json(); // Parse the JSON body
//       })
//       .then((json) => {
//             console.log("Parsed JSON:", json); // Log the JSON data
//       })
//       .catch((e) => console.log("Error:", e));

const data = () => {
      const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
      return response;
  };
  
  data()
      .then((e) => {
          console.log(e);
          return e.json();
      })
      .then((json) => {
          console.log(json);
      })
      .catch((e) => {
          console.log(e);
      });



