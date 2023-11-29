"use strict"

// Hoisting

// const result1 = doSum(5, 55);
// console.log(result1);
// const result2 = doSum(51, 77);
// console.log(result2);
// const result3 = doSum(65, 83);
// console.log(result3);
// function doSum(num1, num2) {
//     return num1 + num2;
// };

// Function

// Example-1
// function fullName(firstName, middleName, lastName) {
//     return firstName + middleName + lastName;
// };
// const result = fullName("Tahia", " ", "Bushra");
// console.log(result);
// const result2 = fullName("Robert", "Downey ", "Jr.");
// console.log(result2);

// Example-2
// function doMath(num1, num2, num3) {
//     const equation = num1 / num2 * num3 + num2 - num1;
//     return equation;
// };
// const result = doMath(25, 36, 55);
// console.log(result);
// const result2 = doMath(52, 63, 95);
// console.log(result2);
// const result3 = doMath(31, 12, 79);
// console.log(result3);

// Example - 3
// function greet(personName) {
//     const message = `Assalamualaikum my name is ${personName}`;
//     return message;
// };
// console.log(greet("Arnob."));
// console.log(greet("Tahia."));
// console.log(greet("Rahman."));

// Example - 4
// function doMath(a, b, c, d = 5) {
//     console.log(a, b, c, d);
//     const sum = a + b + c + d;
//     const difference = sum - a;
//     const division = difference / b;
//     return division;
// };
// console.log(doMath(86, 2, 73));

// Funtion Expression

// Example-1
// const picture = function (pictureName) {
//     const message = `This is the picture of ${pictureName}`;
//     return message;
// };
// console.log(picture("Monalisa"));

// Example-2
// const colorExpresser = function (colorName) {
//     const message = `This is color ${colorName}`;
//     return message;
// };
// console.log(colorExpresser("Yellow"));

// Arrow Function

// Example-1
// const doMath = (num1, num2) =>{
//     const remainder = num1 % num2;
//     return remainder;
// }; console.log(doMath(12, 3));

// for (=>) we can solve the previous function in shorter way

// const doMath = (num1, num2) => num1 % num2;
// console.log(doMath(18, 5));

// Example-2
// const fullName = (firstName, lastName) => firstName + lastName;
// console.log(fullName("Tahia", "Bushra"));

// Fuction calling another function

// Example-1
// function cutTrees(tree) {
//     return tree * 5;
// };
// function makeFurniture(tree) {
//     const pieces = cutTrees(tree);
//     return pieces;
// };
// console.log(makeFurniture(4));

// Example-2
// function sellProduct(skinCareProduct) {
//     return skinCareProduct + 5;
// };
// function totalProduct(skinCareProduct) {
//     return sellProduct(skinCareProduct);
// };
// console.log(sellProduct(20));

// Array

const myNumbers = [85, 47, 12, 14, 33, 21, 57];
const randomArray = ["Marium", "America", "3rd", 2, 11];

//  access element
console.log(myNumbers[5]);
console.log(randomArray[1]);

// access index or position
console.log(myNumbers.indexOf(14));
console.log(myNumbers.indexOf(144));
console.log(randomArray.indexOf("3rd"));
console.log(randomArray.indexOf(5));

// lenght o Array
console.log(myNumbers.length);
console.log(randomArray.length);

// check the Array
console.log(myNumbers.includes(12));
console.log(randomArray.includes("London"));

// add something before
myNumbers.unshift(100);
console.log(myNumbers)
randomArray.unshift(500);
console.log(randomArray);

// remove something before
myNumbers.shift(100);
console.log(myNumbers)
randomArray.shift(500);
console.log(randomArray);

// add something after
myNumbers.push(357);
console.log(myNumbers)
randomArray.push("Aloha");
console.log(randomArray);

// remove something after
myNumbers.pop(357);
console.log(myNumbers)
randomArray.pop("Aloha");
console.log(randomArray);