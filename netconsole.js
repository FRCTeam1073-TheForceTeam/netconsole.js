/* NI-cRio NetConsole on node js -- Evin Ugur */
/*if you'd like to send commands down to the robot by means of NetConsle (ex 'ls'):
	- Set SEND_DATA to true
	- Set TEAM to your team number
*/
var SEND_DATA = true;
var TEAM = 1073;

var dgram = require("dgram");
var readline = require("readline");
var listener = dgram.createSocket("udp4");
var scanner = readline.createInterface(process.stdin, process.stdout);
scanner.setPrompt("$ ");
scanner.prompt();

var sender = dgram.createSocket("udp4");


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
listener.bind(IN);
sender.bind(OUT);
scanner.on("line", function(cmd){
	if(SEND_DATA && cmd != ""){
		var buffer = new Buffer(cmd);
		sender.send(buffer , 0, buffer.length, OUT, getIP(TEAM));
	}
});
function getIP (teamnumber) {
	var str = "" + temnumber;
	if(str.length != 4){
		throw new Error("Team Numbers must  be 4 digits long. If you're < 1000, then add 0s");
	}
	return "10." + str.substring(0,2) + "." + str.substring(2) + ".2";
}
