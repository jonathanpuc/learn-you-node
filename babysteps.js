/* Task: Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout). */

var argArray = process.argv.slice(2);
var numArray = argArray.map(string => parseInt(string));

var numSum = numArray.reduce((currentNum, nextNum) => currentNum + nextNum);

console.log(numSum);