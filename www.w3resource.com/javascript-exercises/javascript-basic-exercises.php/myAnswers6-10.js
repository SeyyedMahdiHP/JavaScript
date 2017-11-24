// in the name of Allah
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
//use https://codepen.io/ to solve the problem
/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
Date Syntax:
new Date();
new Date(value);
new Date(dateString);
new Date(year, month, day, hours, minutes, seconds, milliseconds);
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
//sol1:It simply checks if the day before the 1st March of the specified year is the 29th and if so then it must be a leap year. 
//As long as the correct leap year rules are built into JavaScript you don't even need to know those rules in order to use it.
//https://codepen.io/SeyyedMahdiHP/pen/LOrLXO
var year = prompt("enter a year",2010);
var isLeap = function(year){
  return new Date(year,1,29).getDate() ==29; //new Date(year,2,0).getDate() ==29
}
console.log(isLeap(2010));   //false
console.log(isLeap(2014));   //false
console.log(isLeap(2016));   //true
//sol3:
year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);

