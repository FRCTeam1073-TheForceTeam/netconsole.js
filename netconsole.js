/* NI-cRio NetConsole on node js -- Evin Ugur */

var TEAM = 1073;	//set to your team number to send data down to NetConsole

 

var dgram = require("dgram");
var readline = require("readline");
var listener = dgram.createSocket("udp4");
var scanner = readline.createInterface(process.stdin, process.stdout);
scanner.setPrompt("->"); //to emulate a VxWorks prompt
scanner.prompt();
var sender = dgram.createSocket("udp4");

//ports used for NetConsole - it uses two: one for in and out, probably to avoid a race condition
var NETCONSOLE_PORT_IN = 6666;
var NETCONSOLE_PORT_OUT = 6668;

//Server to listen for data on NetConsole
listener.on("message", function(msg, rinfo)	{
	process.stdout.write(msg.toString());
});
listener.bind(NETCONSOLE_PORT_IN);


//Client code to send data to VxWorks
scanner.on("line", function(cmd){
	if(cmd !== ""){
		var buffer = new Buffer(cmd + "\r\n");	//thanks to github.com/gluxon for pointing out the need for rollback and carriage return chars on ChiefDelhi :) 
		sender.send(buffer, 0, buffer.length, NETCONSOLE_PORT_OUT, getIP(TEAM));
	}
});

//generates your teams IP number
function getIP (teamnumber) {
	var str = "" + teamnumber;
	if(str.length != 4){
		throw new Error("Team Numbers must be 4 digits long. If you're < 1000, then add 0s");
	}
	return "10." + str.substring(0,2) + "." + str.substring(2) + ".2";
}
