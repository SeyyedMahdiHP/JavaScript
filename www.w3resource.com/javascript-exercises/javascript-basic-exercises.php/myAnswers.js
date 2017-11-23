// in the name of Allah
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var today = new Date();
var theDay = today.getDay();
var theHours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var theHours = function (hours=0){
  var amPm = (hours>=12) ? " PM" : " AM";
  hours = (hours >=12) ? hours-12: hours;
  return (hours + amPm).toUpperCase();}(theHours);

console.log(today.toString());
console.log("Today is: "+ daylist[theDay]);
console.log("Current Time is: "+theHours+" : "+minutes+" : "+seconds);
