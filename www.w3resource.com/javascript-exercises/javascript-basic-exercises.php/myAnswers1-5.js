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
  var amPm = (hours>=12) ? " PM " : " AM ";
  hours = (hours >=12) ? hours-12: hours;
  if(hours === 0 && amPm ===" PM "){
    if(minutes === 0 && seconds === 0){
       hours = 12;
       amPm = "Noon";
       }
    else{
      hours = 12;
      amPm = " PM ";
    }
  }
  else if (hours ===0 && amPm ===" AM "){
    if(minutes ===0 && seconds === 0){
      hours = 12;
      amPm = " midNight ";
    }
    else{
      hours = 12;
      amPm = " AM ";
    }
  }
  return (hours + amPm).toUpperCase();}(theHours);

console.log(today.toString());
console.log("Today is: "+ daylist[theDay]);
console.log("Current Time is: "+theHours+" : "+minutes+" : "+seconds);

/*
2. Write a JavaScript program to print the contents of the current window.  Go to the editor
Click me to see the solution
*/
// print the page in pdf format or send it to printer
window.print();

/*
Write a JavaScript program to get the current date.  Go to the editor
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/
var today = new Date();
var theDay = today.getDate();
theDay = (theDay<10) ? '0'+theDay : theDay;
var theMonth = today.getMonth()+1;
theMonth = (theMonth<10)? '0'+theMonth : theMonth;
var theYear = today.getFullYear();
console.log(theDay+"-"+theMonth+"-"+theYear);

/*
4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  
*/


