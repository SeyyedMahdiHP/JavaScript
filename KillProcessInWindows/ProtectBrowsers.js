// in the name of Allah
// SeyyedMahdi HassanPour
// smahdi1991@gmail.com
// webhoma.ir
// we want to stop others to be able open our browsers
const execSync = require('child_process').execSync; //synchron cmd exec
const execASync = require('node-cmd'); 				//Asynchron cmd exec

var run = function(commands){
	execASync.get(commands, (err, data, stderr)=>{});
};
setInterval(function(){ 
run("taskkill /IM firefox.exe /F"); //Async
run("taskkill /IM chrome.exe /F"); //Async
 }, 1000);


