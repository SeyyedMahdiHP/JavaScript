// in the name of Allah
// SeyyedMahdi HassanPour
// smahdi1991@gmail.com
// webhoma.ir
// this is a console app, that by using it, you can set a time in Minutes to kill a programm after the time has been passed.
//its the best way for gamers that do not want to put too much time on a beloved Game, and have a set time for their games
const execSync = require('child_process').execSync; //synchron cmd exec
const execASync = require('node-cmd'); 				//Asynchron cmd exec

var readConsole = require('readline-sync'); // readConsole synchron
var print = console.log;

var run = function(commands, method){
	if(method === "sync"){
	print(execSync(commands).toString());
	}
	else{
		execASync.get(commands, (err, data, stderr)=>{print(data);});
	}
};
print("Programm Started!");
run('tasklist', "sync");
var pName =  function(){
	var pname = readConsole.question("Enter  the Name of Programm you Want to Kill:");
	return (pname.split('.').pop() === "exe")? pname: pname +".exe"; // check the extension
}();
var time = Number(readConsole.question("Enter time in 'Minutes' to Wait for Kill the process after it finished:")); 
var timeToSeconds = time*60;
print(pName+"will be Killed after "+time+" Minutes or "+timeToSeconds+" Seconds!");
setTimeout(function () {//do something once
	var commands = "taskkill /IM "+pName+" /F";
	run(commands); //Async
	//run(commands, "sync"); //Sync
}, parseInt(time*1000*60));
