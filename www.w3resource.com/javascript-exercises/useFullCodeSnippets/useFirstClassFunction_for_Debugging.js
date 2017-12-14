// in the name of Allah
/*
if you wnat to print debug messages use below style and set DEBUG_MODE_ENABLED to "true"
then every place that has a "debug('...')" will show the message
*/
//in the first one you can add multiple functionality in each if else if and ... with a new function to "debug"

//method1:
const DEBUG_MODE_ENABLED = true;
var debug;
function printDebugMessage(message){
  console.log("DEBUG: "+ message);
}
function doNothing(message){
  return;
}
if(DEBUG_MODE_ENABLED){
  debug = printDebugMessage;
}
else{
  debug = doNothing;
}
debug("Some Bug Message");



// method2 :
const DEBUG_MODE_ENABLED = true;
var debug = function(message){
  if(DEBUG_MODE_ENABLED){ console.log("DEBUG: "+ message);}
};
debug("Some Bug Message");



// method3 -> Preferred One:
// all you need is  this peace of code 
"use strict";
const DEBUG_MODE_ENABLED = true;
const FUNCTION_TO_BE_DEBUGGED = "all"; // "all" means: debug all functions, otherwise to debug for eg xyz() just type its name: "xyz"
function debug(message) {
  if(DEBUG_MODE_ENABLED){
    let stack = new Error().stack;
    let caller = stack.split('\n')[2].trim();
    if(caller.split(" ")[1] === FUNCTION_TO_BE_DEBUGGED || FUNCTION_TO_BE_DEBUGGED === "all" ){console.log(caller + ":" + message);}
  }
}

// test the above code
function xyz() {
    debug('hello');
};
function xyzw() {
    debug('hello');
};
xyz();
xyzw();


// method4 Section Debugging: Section Base: just type your Section and it will  debug all functions in that sections
