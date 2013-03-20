/* 
NI-cRio NetConsole on node js
Evin Ugur
*/

var dgram = require("dgram");
var listener = dgram.createSocket("udp4");

//ports cRIO uses for NetConsole
var IN = 6666;
var OUT = 6668;

listener.on("message", function(msg, rinfo){
	console.log(msg);
});
listener.on("listening", function(){
	//event to handle the listener being in an idle state
	console.log("You are no longer receiving any data from NetConsole");	//this is just for debugging...	
});
listener.bind(IN);
