// in the name of Allah
/*
if you wnat to print debug messages use below style and set DEBUG_MODE_ENABLED to "true"
then every place that has a "debug('...')" will show the message
*/
//in the first one you can add multiple functionality in each if else if and ... with a new function to "debug"
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



// or :
const DEBUG_MODE_ENABLED = true;
var debug = function(message){
  if(DEBUG_MODE_ENABLED){ console.log("DEBUG: "+ message);}
};
debug("Some Bug Message");

