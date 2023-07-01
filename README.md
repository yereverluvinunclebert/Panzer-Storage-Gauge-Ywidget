# Panzer-storage-gauge-Ywidget
 
Panzer Storage Yahoo Widget, written in Javascript and XML for the Yahoo 
Widget (Konfabulator) Engine. Created for XP, Vista, Win7, 8, 10+ as well as the 
Apple Mac.

![panzer-stopwatch650](https://github.com/yereverluvinunclebert/Panzer-Clock-Ywidget/assets/2788342/352fb2cb-742d-4e24-afe7-906b05e7fb1e)

This Panzer widget is an attractive dieselpunk Yahoo widget for your desktop. 
It is a simple drive storage gauge. It can handle A or B floppy drives if they 
exist as well as hard drives. Responds quickly to controls and a fix to 
calculate the drive capacity measurements. Functional and gorgeous at the same 
time. This Widget is a moveable widget that you can move anywhere around the 
desktop as you require.

The widget can be resized - Hover the cursor over the widget. Press the CTRL key 
and use your mousewheel up or down. The widget will resize dynamically.

All javascript widgets need an engine to function, in this case the widget uses 
the Yahoo Widget Konfabulator engine. The engine interprets the javascript and 
creates the widget according to the XML description and using the images you 
provide. 

Built using: 

	RJTextEd Advanced Editor  https://www.rj-texted.se/

Tested on :

	ReactOS 0.4.14 32bit on virtualBox    
	Windows 7 Professional 32bit on Intel    
	Windows 7 Ultimate 64bit on Intel    
	Windows 7 Professional 64bit on Intel    
	Windows XP SP3 32bit on Intel    
	Windows 10 Home 64bit on Intel    
	Windows 10 Home 64bit on AMD    
	Windows 11 64bit on Intel  
	
Dependencies:

o A windows-alike o/s such as Windows XP, 7-11 or Apple Mac OSX 11.    	

o Installation of the yahoo widget SDK runtime engine  

	Yahoo widget engine for Windows - https://www.deviantart.com/users/outgoing?http://g6auc.me.uk/ywidgets_sdk_setup.exe  
	Yahoo widget engine for Mac - https://www.deviantart.com/users/outgoing?https://rickyromero.com/widgets/downloads/yahoo-widgets-4.5.2.dmg

Running the widget using a javascript engine frees javascript from running only 
within the captivity of a browser, you will now be able to run these widgets on 
your Windows desktop as long as you have the correct widget engine installed.

 ![Icon](https://github.com/yereverluvinunclebert/Panzer-Clock-Ywidget/assets/2788342/332a7b59-abd6-4eac-857d-51dfe2d80af9)
 
Instructions for running Yahoo widgets on Windows
=================================================

1. Install yahoo widget SDK runtime engine
2. Download the gauge from this repo.
3. Unzip it
4. Double-click on the resulting .KON file and it will install and run

Instructions for running Yahoo widgets on Mac OS/X ONLY
========================================================

1. Install yahoo widget SDK runtime engine for Mac
2. Download the gauge from this repo.
3. Unzip it
4. For all all recent versions of Mac OS/X including Sierra, edit the following 
file:

com.yahoo.widgetengine.plist which is in /Users/xxx/Library/Preferences. Look 
for these lines: 
   
	<key>DockOpen</key>  
	<string>false</string>  

Change to false if it is true.

5. Double-click on the widgets .KON file and it will install and run

Wit these instructions you should be able to start Yahoo! Widgets and the 
menubar item should appear. Widgets can then be started from the menubar or by 
double-clicking on the KON file in the usual way.

![about](https://github.com/yereverluvinunclebert/Panzer-Clock-Ywidget/assets/2788342/bf3ec2c8-b689-434b-be30-f1f441c41c0a)


LICENCE AGREEMENTS:

Copyright 2023 Dean Beedell

In addition to the GNU General Public Licence please be aware that you may use
any of my own imagery in your own creations but commercially only with my
permission. In all other non-commercial cases I require a credit to the
original artist using my name or one of my pseudonyms and a link to my site.
With regard to the commercial use of incorporated images, permission and a
licence would need to be obtained from the original owner and creator, ie. me.