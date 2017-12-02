// in the name of Allah
/*
this section is for conceptual questions
*/
1.What are the benefits of FirstClass Functions?
  /*
  //https://www.sitepoint.com/higher-order-functions-javascript/
  //https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function:
  A programming language is said to have First-class functions when functions 
  in that language are treated like any other variable. For example, in such a language,
  a function can be passed as an argument to other functions, can be returned by another 
  function and can be assigned as a value to a variable.
  ////////////////////////////////////////////////////////////
  //https://stackoverflow.com/questions/705173/what-is-meant-by-first-class-object
  In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.
  This page also illustrates it beautifully:

  Really, just like any other variable
  A function is an instance of the Object type
  A function can have properties and has a link back to its constructor method
  You can store the function in a variable
  You can pass the function as a parameter to another function
  You can return the function from a function
  */
var print = console.log();
var shopping = function(args,...){};
2.What are the benefits of High-Order Functions?
  /*
  //higher-order function: lynda: https://www.lynda.com/JavaScript-tutorials/Learning-Functional-Programming-JavaScript/585272-2.html
  A function that takes a function as an argument, or returns a function, or both
  */
var shopping= function(item, function(){});
var shopping = function(){
return function();
};
