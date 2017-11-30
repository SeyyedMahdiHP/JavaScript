// in the name of Allah
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
//use https://codepen.io/ to solve the problem
/*
6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
Explanation:

A leap year is a year containing one additional day added to keep the calendar year synchronized with 
the astronomical or seasonal year. Because seasons and astronomical events do not repeat in a whole number of days, 
calendars that have the same number of days in each year drift over time with respect to the event that the year is supposed to track.
By inserting an additional day or month into the year, the drift can be corrected. A year that is not a leap year is called a common year.
Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100,
but these centurial years are leap years if they are exactly divisible by 400. 
For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

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

/*
7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
*/
//https://thimbleprojects.org/seyyedmahdi/366764
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Made with Thimble</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Q7:</h1>
    <p>Write a JavaScript program to find <strong>1st January</strong> is being a <strong>Sunday</strong> between 2014 and 2050.
    </p>
    <p>Range:<input id="rangeInput"  min="1970" max="2050" placeholder="1970-2050" value="1970-2050"></p>
    <input type="button" value="Start" onClick="checkRange('rangeInput');">
    <p>Answer:<span id="answerBox"></span></p>
    <script>
      var isSunday = function(year){
        var answerElement = document.getElementById("answerBox");
        var dayObject = new Date(year, 0, 1);
        if (dayObject.getDay() === 0){
          answerElement.innerHTML += dayObject.toDateString()+"sunday<br>";
          return true;
        }
        return false;
      };
      var checkRange = function(id){
        var rangeElement = document.getElementById(id);
        var range = rangeElement.value.split("-");
        var min = range[0];
        var max = range[1];
        var flag = false;
        for(var year =min; year<=max; year++){
          flag = isSunday(year);
          console.log(year +" "+ flag);
        }
      };
    </script>
  </body>
</html>

/*
8. Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched". 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
//https://thimbleprojects.org/seyyedmahdi/368191/
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Q8</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Q8:</h1>
    <p>
      Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
    </p>
    <p>Solution:
      <input type="button" value="Guess" id="btnStart" onClick="checkGuess();">
    </p>
    <script>
    var checkGuess = function(){
      var randNum = parseInt(getRandomNumber(1,10));
      var guess = parseInt(prompt("Enter you're guess number 1-10:","0"));
      console.log(randNum);
      var check = (randNum === guess) ? true : false;
      if(check){alert("Good Work!");}
      else{alert("Not Matched!");}
      alert("the Random Number Was:"+randNum);
      
    };
    var getRandomNumber = function(min, max){
      return Math.random()*(max-min+1) + min; // "+min" used to set  the result greater than min, +1 used for inclusive max
    };
    </script>
  </body>
</html>

/*
9. Write a JavaScript program to calculate days left until next Christmas.
*/
//https://thimbleprojects.org/seyyedmahdi/368209
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Q9</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body onClick="checkNextChristmas('answerPlace');">
    <h1>Q9:</h1>
    <p>
      Write a JavaScript program to calculate days left until next Christmas.
    </p>
    <p>Answer(<em>click on the page to see the result)</em>:<br><span id="answerPlace"></span></p>
    <script>
    var checkNextChristmas = function(id){
      var answElem = document.getElementById(id);
      var today = new Date();
      var nextChris = calcNextChrisTime(today);
      var remainingTime =(nextChris.getTime() - today.getTime())/(1000*3600*24);
      answElem.innerHTML = Math.ceil(remainingTime) + "Day Remaining to Next Christmas:-)";
    };
      var calcNextChrisTime = function(today){
        var flag = (today.getMonth()===11 && today.getDate()>25)? true : false;
        var nextChris=(flag)? new Date(today.getFullYear()+1,11,25) : new Date(today.getFullYear(),11,25);
        return nextChris;
      };
    </script>
  </body>
</html>
