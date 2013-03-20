#netconsole.js
This is a port of NetConsole for the ni-cRio used in FIRST Robotics Competitions to node.js. This is cool because it's now super cross platform, and due to the event listeners of node.js.

##Usage

To obtain the latest stable build:
```
	npm install netconsole.js
```

To run a local version
```
	node netconsole.js
```

##What's cool about this

-	Makes FIRST more accessible
-	Cross platform. Can run on Windows, Linux, Mac, and Android (and unofficially iOS)
-	Arguably faster at dumping your `printfs` :P node js runs on an event-driven architecture, so rather than maintaining a UDP queue, NetConsole data can just be printed to stdout whenever the bound datagram socket sees new data by means of a javascript callback function.

##Future Work
Currently, we stream NetConsole data, never can we send data back down. The traditional NetConsole application gave you access to a full VxWorks shell, this needs to be implemened in netconsole.js