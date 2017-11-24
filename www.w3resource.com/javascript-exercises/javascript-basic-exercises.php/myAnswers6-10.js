// in the name of Allah
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
//use https://codepen.io/ to solve the problem
/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
*/
//sol1:
var y = prompt("enter a year",2010);
var leapdate = new Date(y, 2, 0);
if (leapdate.date == 29) alert(y+' is a leap year');
else alert(y+' is not a leap year');
//sol2:
var isLeap = function(year){
  return new Date(year,1,29).getDate() ==29;
}
isLeap(2010);   //false
isLeap(2014);   //false
isLeap(2016);   //true
//sol3:
year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);

