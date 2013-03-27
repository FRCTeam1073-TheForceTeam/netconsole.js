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
-	Arguably faster at dumping your `printf`s than the stock version :P node.js runs on an event-based architecture, so rather than maintaining a UDP queue, data from the cRio can just be printed to stdout whenever the bound datagram socket sees new data by means of a javascript callback function.

##Sending VxWorks Commands Through NetConsole

- Set `TEAM` to your team number (this is used to generate your robot's IP address) 

```
	var TEAM = 1073;	//set to your team number
```

##List of VxWorks Commands

Here is a list of all the commands you can run on the VxWorks operating system.
http://touro.ligo-la.caltech.edu/~cparames/CDS/vxWorks_commands.html

##Future Work

Here's some stuff I plan to do in the future. Please fork and add your own features if you see fit, or you can submit something that you'd like to be added by means of email or whatever.

###VxWorks Scripts
VxWorks has no support for scripting natively. I plan on adding in a feature to read a list of VxWorks commands from the file system, and then have a special command in `netconsole.js` to read the file line-by-line and UDP down the data. It'd be simple, but easy enough to do...