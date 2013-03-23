#netconsole.js
This is a port of NetConsole for the ni-cRio used in FIRST Robotics Competitions to node.js. This is cool because it's now super cross platform, and due to the event listeners of node.js.

##Usage

To obtain the latest stable build:
```
	npm install frcnetconsole
```

To run a local version
```
	node netconsole.js
```

##What's cool about this

-	Makes FIRST more accessible
-	Cross platform. Can run on Windows, Linux, Mac, and Android (and unofficially iOS)
-	Arguably faster at dumping your `printf`s than the stock version :P node js runs on an event-based architecture, so rather than maintaining a UDP queue, data from the cRio can just be printed to stdout whenever the bound datagram socket sees new data by means of a javascript callback function.

##Sending VxWorks Commands Through NetConsole
If you'd like to send down data to NetConsole you'd have to enable the feature in the code

- Set `SEND_DATA` to true
- Set `TEAM` to your team number (this is used to generate your robot's IP address)

```
	var SEND_DATA = true;	//true by default
	var TEAM = 1073;	//set to your team number
```

##Future Work

-	We can send down information to the NetConsole ie `ls` but instead of running the command, it just echos back the data we send. This will get fixed soon. Everything else seems to work well though!