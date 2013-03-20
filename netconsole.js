/* NI-cRio NetConsole on node js -- Evin Ugur */
//if you like to interact with the NetConsole, set your team number here and this bool to true
var SEND_DATA = false;
var TEAM = "1073";

var dgram = require("dgram");
var readline = require("readline");
var listener = dgram.createSocket("udp4");
listener.bind(IN);
var scanner = readline.createInterface(process.stdin, process.stdout);
scanner.setPrompt("$ ");
scanner.prompt();

var sender = dgram.createSocket("udp4");
sender.bind(OUT);

//ports uses for NetConsole - it uses two: one for in and out, probably to avoid a race condition
var IN = 6666;
var OUT = 6668;

listener.on("message", function(msg, rinfo){
	console.log(msg.toString());
});
listener.on("listening", function(){
	//event to handle the listener being in an idle state
	console.log("You are no longer receiving any data from NetConsole");	//this is just for debugging...	
});
scanner.on("line", function(cmd){
	if(SEND_DATA){
		var buffer = new Buffer(cmd);
		sender.sendTo(buffer , 0, Buffer.byteLength(cmd), OUT, getIP(TEAM));
	}
});
function getIP (teamnumber) { return "10." + teamnumber.substring(0,2) + "." + teamnumber.substring(2) + ".2";}