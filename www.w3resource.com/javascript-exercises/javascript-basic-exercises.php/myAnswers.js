// in the name of Allah
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var rightNow = new Date();
var dataString = rightNow.toString();
var theDay = rightNow.getDay();
console.log(dataString);
console.log("Today is: "+ dayNames[theDay]);
console.log("Current Time is: "+ );

