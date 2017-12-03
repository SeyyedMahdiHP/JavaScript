// in the name of Allah
// SeyyedMahdi HassanPour
// smahdi1991@gmail.com
// webhoma.ir
// this is a console app, that by using it, you can set a time in Minutes to kill a programm after the time has been passed.
const execSync = require('child_process').execSync;
var readConsole = require('readline-sync');
var print = console.log;
var run = function(commands){
	var code = execSync(commands);
	print(code.toString());
};
print("Programm Started!");
run('tasklist');
var pName =  function(){
	var pname = readConsole.question("Enter  the Name of Programm you Want to Kill:");
	return (pname.split('.').pop() === "exe")? pname: pname +".exe"; // check the extension
}();
var time = Number(readConsole.question("Enter time in 'Minutes' to Wait for Kill the process after it finished:")); 
var timeToSeconds = time*60;
print(pName+"will be Killed after "+time+" Minutes or "+timeToSeconds+" Seconds!");
setTimeout(function () {
  run("taskkill /IM "+pName+" /F"); //do something once
}, parseInt(time*1000*60));

