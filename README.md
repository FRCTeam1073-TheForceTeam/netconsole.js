#netconsole.js
This is a port of NetConsole for the ni-cRio used in FIRST Robotics Competitions to node.js. 

##Usage

To obtain the latest stable build:
```
	npm install frcnetconsole
	#npm hosting is here: https://npmjs.org/package/frcnetconsole
```

To run a local version
```
	node netconsole.js
```

##What's cool about this

-	Makes FIRST more accessible
-	Cross platform. Can run on Windows, Linux, Mac, and Android (and unofficially iOS)
-	Arguably faster at dumping your `printf`s than the stock version :P node.js runs on an event-based architecture, so rather than maintaining a UDP queue, data from the cRio can just be printed to stdout whenever the bound datagram socket sees new data by means of a JavaScript callback function.

##Sending VxWorks Commands Through NetConsole

- Set `TEAM` to your team number (this is used to generate your robot's IP address) 

```
	var TEAM = 1073;	//set to your team number
```

##List of VxWorks Commands

Here is a list of all the commands you can run on the VxWorks operating system, and subsequently, through this program.
http://touro.ligo-la.caltech.edu/~cparames/CDS/vxWorks_commands.html

##Future Work

This is some stuff I'd like to do in the future. If you think this is missing something than please fork and add your own features if you see fit, or you can submit something that you'd like to be added by means of email or whatever.

###Running VxWorks Scritps
VxWorks has support for scripting, however most FRC development tends to stay away from WindShell. To make life easier, I'll be soon supporting the ability to run scripts off of the host by means of sending down data line by line as if they were being typed into the shell. While this obviously isn't the most mission safe way of automating tasks, it'll useful and (to me) a lot easier for some of the smaller things that might need to be done on the cRio.
