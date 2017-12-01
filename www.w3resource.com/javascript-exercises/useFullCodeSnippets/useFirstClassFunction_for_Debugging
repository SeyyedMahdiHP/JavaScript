// in the name of Allah
/*
if you wnat to print debug messages use below style and set DEBUG_MODE_ENABLED to "true"
then every place that has a "debug('...')" will show the message
*/
const DEBUG_MODE_ENABLED = true;
function printDebugMessage(message){
  console.log("DEBUG: "+ message);
}

if(DEBUG_MODE_ENABLED){
  debug = printDebugMessage;
}
else{
  debug = doNothing;
}


debug("Some Bug Message");
