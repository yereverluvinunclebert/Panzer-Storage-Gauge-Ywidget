/*
    Panzer Storage Widget

    Coded by Dean Beedell
    Visuals created by Dean Beedell
    Sorted by Harry Whitfield

    email: dean.beedell@lightquick.co.uk
    http//lightquick.co.uk
*/

/*jslint for, multivar, this */

/*property
    MouseWheelPref, busy, charAt, charCodeAt, clockSize, copy, ctrlKey, data,
    duration, ease, endAngle, floor, freeBytes, hOffset, hRegistrationPoint,
    height, hoffset, interval, isNaN, itemExists, kEaseOut, keyCode, length,
    maxLength, milliseconds, minLength, onKeyDown, onMouseDown, onMouseUp,
    onMouseWheel, onPreferencesChanged, onTimerFired, onWakeFromSleep, onload,
    opacity, open, path, platform, pow, random, remove, rotation, round,
    scrollDelta, size, soundPref, src, srcHeight, srcWidth, start, startAngle,
    startTime, substring, tickSwitchPref, ticking, ticks, tooltip, totalBytes,
    userWidgetsFolder, vOffset, vRegistrationPoint, value, visible, voffset,
    volumes, width
*/

"use strict";

var mainWindow, background, surround, switchFacesButton, storageMaxText, storagePercText,storageMaxTextArea,
        storagePercTextArea,
        hourHand, hourShadow, minuteHand, minuteShadow, secondHand, secondShadow,
        bigReflection, windowReflection,
        startButton, stopButton, pin, prefs, tankHelp, helpbutton, tickSwitch,
        createLicence, setmenu, theDLSdelta, lprint, smallMinuteHand,
        helpButton, showFace, mainScreen, settooltip, checkLockWidget,
        dangerLamp, letterBack, driveLetter, driveLetterText, buildVitality,
        helpWindow, changePrefs;

var driveLetterVar;
var windowx = 785, windowy = 622;
var backxo = 0, backyo = 0, backgroundxo = 7, backgroundyo = 0;
var surroundxo = 0, surroundyo = 0;
var switchFacesButtonxo = 710, switchFacesButtonyo = 267;
var dangerLampxo = 247, dangerLampyo = 150;
var letterBackxo = 392, letterBackyo = 136;
var driveLetterxo = 400, driveLetteryo = 140;

var driveLetterTextxo = 425, driveLetterTextyo = 177;

var startButtonxo = 710, startButtonyo = 135;
var stopButtonxo = 710, stopButtonyo = 395;
var secondxo = 416, secondyo = 313, secondxr = 11.5, secondyr = 245.5;
var secondshadowxo = 416, secondshadowyo = 313, secondshadowxr = 22.5, secondshadowyr = 260.5;

// default size
// tooltip to resize

// macintosh
var storagePercTextAreaxo = 323, storagePercTextAreayo = 190;
var storageMaxTextAreaxo = 513, storageMaxTextAreayo = 383;

// windows
var storagePercTextxo = 330, storagePercTextyo = 208;
var storageMaxTextxo = 523, storageMaxTextyo = 403;

var shadowOffset = 0;
var bigReflectionxo = 169, bigReflectionyo = 69;
var windowReflectionxo = 511, windowReflectionyo = 210;
var pinxo = 162, pinyo = 60;
var prefsxo = 161, prefsyo = 516;
var helpButtonxo = 625, helpButtonyo = 516;
var tickSwitchxo = 625, tickSwitchyo = 59;
var vols = 0;
var volsCnt = 0;

var chosenVol = 0;

var currIcon = "Resources/images/dock.png";
var widgetName = "Panzer storage Ywidget.widget";

var counter = "Resources/sounds/counter.mp3";
var lock = "Resources/sounds/lock.mp3";
var till = "Resources/sounds/till01.mp3";
var ting = "Resources/sounds/ting.mp3";
var mistake = "Resources/sounds/mistake.wav";
var thhhh = "Resources/sounds/thhhh.mp3";
var winding = "Resources/sounds/winding.mp3";

var konPath2 = "";

//put this in a loop later
driveLetterVar = new Array(26);
driveLetterVar[3] = "Resources/images/C-image.png";
driveLetterVar[4] = "Resources/images/D-image.png";
driveLetterVar[5] = "Resources/images/E-image.png";
driveLetterVar[6] = "Resources/images/F-image.png";
driveLetterVar[7] = "Resources/images/G-image.png";
driveLetterVar[8] = "Resources/images/H-image.png";
driveLetterVar[9] = "Resources/images/I-image.png";
driveLetterVar[10] = "Resources/images/J-image.png";
driveLetterVar[11] = "Resources/images/K-image.png";
driveLetterVar[12] = "Resources/images/L-image.png";
driveLetterVar[13] = "Resources/images/M-image.png";
driveLetterVar[14] = "Resources/images/N-image.png";
driveLetterVar[15] = "Resources/images/O-image.png";
driveLetterVar[16] = "Resources/images/P-image.png";
driveLetterVar[17] = "Resources/images/Q-image.png";
driveLetterVar[18] = "Resources/images/R-image.png";
driveLetterVar[19] = "Resources/images/S-image.png";
driveLetterVar[20] = "Resources/images/T-image.png";
driveLetterVar[21] = "Resources/images/U-image.png";
driveLetterVar[22] = "Resources/images/V-image.png";
driveLetterVar[23] = "Resources/images/W-image.png";
driveLetterVar[24] = "Resources/images/X-image.png";
driveLetterVar[25] = "Resources/images/Y-image.png";
driveLetterVar[26] = "Resources/images/Z-image.png";

include("functions.js");
include("Resources/Licence/licence.js");

Number.isNaN = Number.isNaN || function (value) {       // polyfill
    return value !== value;
};

//===============================================================
// this function does the actual resizing
//===============================================================
function sizeClock() {
    var scale = Number(preferences.clockSize.value) / 100;

    function sc(img, hOffset, vOffset, hReg, vReg) {
        img.hOffset = Math.round(hOffset * scale);
        img.vOffset = Math.round(vOffset * scale);
        img.width = Math.round(img.srcWidth * scale);
        img.height = Math.round(img.srcHeight * scale);
        if (hReg !== undefined) {
            img.hRegistrationPoint = Math.round(hReg * scale);
        }
        if (vReg !== undefined) {
            img.vRegistrationPoint = Math.round(vReg * scale);
        }
    }

    mainWindow.width = Math.round(windowx * scale);
    mainWindow.height = Math.round(windowy * scale);

    sc(background, backgroundxo, backgroundyo);
    sc(surround, surroundxo, surroundyo);
    sc(switchFacesButton, switchFacesButtonxo, switchFacesButtonyo);
    sc(dangerLamp, dangerLampxo, dangerLampyo);
    sc(letterBack, letterBackxo, letterBackyo);
    sc(driveLetter, driveLetterxo, driveLetteryo);
    sc(startButton, startButtonxo, startButtonyo);
    sc(stopButton, stopButtonxo, stopButtonyo);
    sc(secondHand, secondxo, secondyo, secondxr, secondyr);
    sc(secondShadow, secondshadowxo + shadowOffset, secondshadowyo + shadowOffset, secondshadowxr, secondshadowyr);

    sc(bigReflection, bigReflectionxo, bigReflectionyo);
    sc(windowReflection, windowReflectionxo, windowReflectionyo);
    sc(pin, pinxo, pinyo);
    sc(prefs, prefsxo, prefsyo);

    sc(helpButton, helpButtonxo, helpButtonyo);
    sc(tickSwitch, tickSwitchxo, tickSwitchyo);

    // macintosh
    storageMaxTextArea.size = Math.round(22 * scale);
    storageMaxTextArea.hOffset = Math.round(storageMaxTextAreaxo * scale);
    storageMaxTextArea.vOffset = Math.round(storageMaxTextAreayo * scale);

    storagePercTextArea.size = Math.round(22 * scale);
    storagePercTextArea.hOffset = Math.round(storagePercTextAreaxo * scale);
    storagePercTextArea.vOffset = Math.round(storagePercTextAreayo * scale);

    // WINDOWS
    storageMaxText.size = Math.round(22 * scale);
    storageMaxText.hOffset = Math.round(storageMaxTextxo * scale);
    storageMaxText.vOffset = Math.round(storageMaxTextyo * scale);

    storagePercText.size = Math.round(22 * scale);
    storagePercText.hOffset = Math.round(storagePercTextxo * scale);
    storagePercText.vOffset = Math.round(storagePercTextyo * scale);

    driveLetterText.size = Math.round(40 * scale);
    driveLetterText.hOffset = Math.round(driveLetterTextxo * scale);
    driveLetterText.vOffset = Math.round(driveLetterTextyo * scale);
}
//=====================
//End function
//=====================

//=====================
//  function that is called when a drive change is required
//=====================
function selectDriveLetter() {
    var n = 0;
    var text = vols[chosenVol].path.substring(0, 1);
    
    // extract the Ascii code and map it to the array
    n = text.charCodeAt(0) - 64;
    //print("driveLetter ASCII code " + text + " " + n);
    
    // checking the existence of the image files fails in the spawned widget as it cannot find them,
    // the spawned widget file having been deleted
    // as a result it all needs to be in memory
    // if (filesystem.itemExists("Resources/images/" + driveLetterText + "-image.png")) {
    
    driveLetter.src = driveLetterVar[n];
    //updateStorage();
}
//=====================
//End function
//=====================

//===============================================================
// this function is called by the main timer and does the gauge work
//===============================================================
function updateStorage() {
    var a, usedPerc, freePerc, freeSpace, // systemMemoryLoad, systemMemoryTotalPhysical,
            paths, testAmount, suffix, power;

    rotateObject = function (obj, value) {
        var animationDuration,
            animationInterval = 60,

            updateMe = function () {    // called during rotateAnimation
                var now = animator.milliseconds, fraction, angle;

                if (now >= (this.startTime + this.duration)) {
                    obj.rotation = this.endAngle;
                    obj.busy = false;
                    return false;
                }
                fraction = (now - this.startTime) / this.duration;
                angle = animator.ease(this.startAngle, this.endAngle, fraction, animator.kEaseOut);
                obj.rotation = angle;
                return true;
            },

            rotateAnimation = function (startAngle, endAngle) {
                var rotate = new CustomAnimation(animationInterval, updateMe);
                rotate.duration = animationDuration;
                rotate.startAngle = startAngle;
                rotate.endAngle = endAngle;
                animator.start(rotate);
            };

        obj.busy = true;
        animationDuration = animationInterval * Math.floor(900 / animationInterval - 1);
        rotateAnimation(obj.rotation, value);
    };
    storageTimer.interval = preferences.sampleIntervalPref.value;

    suppressUpdates();
    print("getting vols");
    vols = filesystem.volumes;
    volsCnt = vols.length;
    freeSpace = [];
    freePerc = [];
    usedPerc = [];
    paths = [];
    suffix = [];
    for (a = 0; a < volsCnt; a += 1) {
        paths[a] = vols[a].path;
        print("vols[a].path: " + vols[a].path);
        print("vols[a].totalBytes: " + vols[a].totalBytes);
        print("vols[a].freeBytes: " + vols[a].freeBytes);
        testAmount = vols[a].freeBytes;
		  if (system.platform === "macintosh") {
            //print("Macintosh testAmount: " + testAmount);

				power = Math.pow(1000, 4);
				if (testAmount >= power) {
			            freeSpace[a] = Math.floor(testAmount / power);
			            suffix[a] = "TB";
			   } else {
					power = Math.pow(1000, 3);
					if (testAmount >= power) {
			                	freeSpace[a] = Math.floor(testAmount / power);
			                	suffix[a] = "GB";
			      } else {
			 			power = Math.pow(1000, 2);
						if (testAmount >= power) {
			                		freeSpace[a] = Math.floor(testAmount / power);
			                		suffix[a] = "MB";
			         } else {
			 				power = Math.pow(1000, 1);
							if (testAmount >= power) {
			                			freeSpace[a] = Math.floor(testAmount / power);
			                			suffix[a] = "kB";
			            } else {
			                			freeSpace[a] = testAmount;
			                			suffix[a] = "bytes";
			            }
			         }
			      }
			  }
		  } else { // windows
            //print("Windows testAmount: " + testAmount);
				// the reason these are hard-coded is to reduce the white-window redrawing failure when a number of widgets are using cpu, for example on startup.
				power = 1099511627776; //Math.pow(1024, 4);
				if (testAmount >= power) {
		            freeSpace[a] = Math.floor(testAmount / power);
		            suffix[a] = "TB";
				} else {
					power = 1073741824; //Math.pow(1024, 3);
					if (testAmount >= power) {
		            	freeSpace[a] = Math.floor(testAmount / power);
		            	suffix[a] = "GB";
		        	} else {
			 			power = 1048576; //Math.pow(1024, 2);
						if (testAmount >= power) {
		            		freeSpace[a] = Math.floor(testAmount / power);
		            		suffix[a] = "MB";
		        		} else {
			 				power = 1024; //Math.pow(1024, 1);
							if (testAmount >= power) {
		            			freeSpace[a] = Math.floor(testAmount / power);
		            			suffix[a] = "KB";
		            	} else {
		            			freeSpace[a] = testAmount;
		            			suffix[a] = "bytes";
		            			
		            	}
		            }
		         }
				}
			}

		  /*
		  if (system.platform === "windows") {
            //print("Macintosh testAmount: " + testAmount);

				power = Math.pow(1000, 4);
				if (testAmount >= power) {
			            freeSpace[a] = Math.floor(testAmount / power);
			            suffix[a] = "TB";
			   } else {
					power = Math.pow(1000, 3);
					if (testAmount >= power) {
			                	freeSpace[a] = Math.floor(testAmount / power);
			                	suffix[a] = "GB";
			      } else {
			 			power = Math.pow(1000, 2);
						if (testAmount >= power) {
			                		freeSpace[a] = Math.floor(testAmount / power);
			                		suffix[a] = "MB";
			         } else {
			 				power = Math.pow(1000, 1);
							if (testAmount >= power) {
			                			freeSpace[a] = Math.floor(testAmount / power);
			                			suffix[a] = "kB";
			            } else {
			                			freeSpace[a] = testAmount;
			                			suffix[a] = "bytes";
			            }
			         }
			      }
			  }
		  } else { // windows
            print("Windows testAmount: " + testAmount);

				power = Math.pow(1024, 4);
				if (testAmount >= power) {
		            freeSpace[a] = Math.floor(testAmount / power);
		            suffix[a] = "TB";
				} else {
					power = Math.pow(1024, 3);
					if (testAmount >= power) {
		            	freeSpace[a] = Math.floor(testAmount / power);
		            	suffix[a] = "GB";
		        	} else {
			 			power = Math.pow(1024, 2);
						if (testAmount >= power) {
		            		freeSpace[a] = Math.floor(testAmount / power);
		            		suffix[a] = "MB";
		        		} else {
			 				power = Math.pow(1024, 1);
							if (testAmount >= power) {
		            			freeSpace[a] = Math.floor(testAmount / power);
		            			suffix[a] = "KB";
		            	} else {
		            			freeSpace[a] = testAmount;
		            			suffix[a] = "bytes";
		            			
		            	}
		            }
		         }
				}
			}
        */ 
        freePerc[a] = Math.floor(100 * (vols[a].freeBytes / vols[a].totalBytes));
        if (!Number.isNaN(freePerc[a])) {
            usedPerc[a] = 100 - freePerc[a];
        } else {
            usedPerc[a] = 100;
            freeSpace[a] = "000";
        }
    }

    storagePercText.data = String("   " + usedPerc[chosenVol]).slice(-3); // returns " 23" (with one space)
    storagePercText.tooltip = "Percentage usage: " + String(usedPerc[chosenVol]) + "%";

    storageMaxText.data = String("   " + freeSpace[chosenVol]).slice(-3); // returns " 23" (with one space)
    storageMaxText.tooltip = "Drive storage: " + String(freeSpace[chosenVol] + suffix[chosenVol] + " free.");

    storagePercTextArea.data = storagePercText.data
    storagePercTextArea.tooltip = storagePercText.tooltip;

    storageMaxTextArea.data = storageMaxText.data
    storageMaxTextArea.tooltip = storageMaxText.tooltip;

    driveLetterText.data = String(chosenVol);							// 0,1,2,3 etc
    driveLetter.tooltip = "Drive name: " + paths[chosenVol];			// full path name
    
    if (system.platform === "macintosh") {
    	driveLetter.opacity = 10;
    	driveLetterText.visible = true;
    } else {
    	selectDriveLetter();
    	driveLetter.opacity = 255;
    	driveLetterText.visible = false;
     }
    resumeUpdates();

    if (preferences.tickSwitchPref.value === "tick") {
        secondHand.rotation = (usedPerc[chosenVol] * 3) + 30;
        secondShadow.rotation = secondHand.rotation;
    } else {
        // zero pointer smoothly
        rotateObject(secondHand, (usedPerc[chosenVol] * 3) + 30);
        rotateObject(secondShadow, (usedPerc[chosenVol] * 3) + 30);
    }

    if (usedPerc[chosenVol] >= 80) {
        dangerLamp.src = "Resources/images/red-lamptrue.png";
    }
    if (usedPerc[chosenVol] < 90) {
        dangerLamp.src = "Resources/images/red-lampfalse.png";
    }
    if (usedPerc[chosenVol] < 80) {
        dangerLamp.src = "Resources/images/green-lamptrue.png";
    }
    buildVitality(currIcon, String(usedPerc[chosenVol])); // build the dock vitality
}
//=====================
//End function
//=====================

//===============================================================
// this function generates a unique 10 character string for the unique filename
//===============================================================
function makeid() {
    var text = "";
    var i;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (i = 0; i < 10; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
//=====================
//End function
//=====================

//=================================
// timer to delete spawned widget files
//=================================
var deleteTimer = new Timer();
deleteTimer.ticking = false;
deleteTimer.interval = 20;
//=================================
// timer ends
//=================================

//===============================================================
// this function spawns another drive gauge
//===============================================================
startButton.onMouseDown = function () {
    //var konFile = "Panzer storage Ywidget.kon";               // change to .widget
    //var konFile2 = "Panzer storage Ywidget"+id+".kon";        // change to .widget
    // use widget default path
    //var konPath = "E:\\dean\\steampunk theme\\Panzer storage gauge Ywidget\\Contents\\" + konFile;
    //konPath2 = "E:\\dean\\steampunk theme\\Panzer storage gauge Ywidget\\Contents\\" + konFile2;
    //print("konPath2 "+konPath2);

    var konFile = "Panzer storage gauge Ywidget.widget";                // change to .widget
    var id = makeid();
    var konFile2 = "Panzer storage gauge Ywidget" + id + ".widget";     // change to .widget
    var konPath = convertPathToPlatform(system.userWidgetsFolder + "\\" + konFile);
    
    konPath2 = convertPathToPlatform(system.userWidgetsFolder + "\\" + konFile2);
    //print("filesystem.itemExists(konPath) " + filesystem.itemExists(konPath));

    if (filesystem.itemExists(konPath)) {
        if (preferences.soundPref.value !== "disabled") {
            play(ting, false);
        }
        //print("Spawing a copy of the widget: " + konFile2);
        filesystem.copy(konPath, konPath2);
        filesystem.open(konPath2);
        deleteTimer.ticking = true;
        mainWindow.hoffset += 20;   // spawn moves the original widget to the left and up
        mainWindow.voffset += 20;
        return;
    }
    alert("Cannot spawn a widget as it does not exist in the .userWidgetsFolder. ");
};
//=====================
//End function
//=====================

//===============================================================
// general utility functions on graphic objects
//===============================================================
startButton.onMouseUp = function () {
    this.opacity = 255;
};
//=====================
//End function
//=====================

//===============================================================
// this function changes the screw image
//===============================================================
prefs.onMouseDown = function () {
    prefs.src = "Resources/images/prefs02.png";
};
//=====================
//End function
//=====================

//===============================================================
// this function shows the prefs
//===============================================================
prefs.onMouseUp = function () {
    prefs.src = "Resources/images/prefs01.png";
    if (preferences.soundPref.value !== "disabled") {
        play(winding, false);
    }
    showWidgetPreferences();
};
//=====================
//End function
//=====================

//===============================================================
// this function shows the help
//===============================================================
helpButton.onMouseDown = function () {
    helpButton.opacity = 255;
};
//=====================
//End function
//=====================

//===============================================================
// this function shows the help
//===============================================================
helpButton.onMouseUp = function () {
    helpButton.opacity = 1;
    tankHelpShow();
};
//=====================
//End function
//=====================

//===============================================================
// this function shows the help
//===============================================================
function tankHelpShow() {
    helpWindow.visible = true;
    if (preferences.soundPref.value !== "disabled") {
        play(till, false);
    }
}
//=====================
//End function
//=====================


//===============================================================
// this function makes the help go away
//===============================================================
tankHelp.onMouseDown = function () {
    helpWindow.visible = false;
    if (preferences.soundPref.value !== "disabled") {
        play(ting, false);
    }
};
//=====================
//End function
//=====================

//===============================================================
// this function stops the widget
//===============================================================
stopButton.onMouseDown = function () {
    this.opacity = 10;
};
//=====================
//End function
//=====================

//===============================================================
// this function stops the widget
//===============================================================
stopButton.onMouseUp = function () {
    this.opacity = 255;
};
//=====================
//End functions
//=====================

//the following function needs to operate on both the background and background2 faces, as the ctrl event can only be caught by the
//onMouseWheel itself on one object the event cannot be referred to by the key click on another object. The function would have to be duplicated
//for the background and background2 objects. Instead I have made the background object opacity to 1 so it seems as if it is not
//visible but it still responds to keyclicks and mousewheel movements even when supposedly 'invisible' - see the showFace function.

//=================================
// resizing on mouse scroll wheel combined with a CTRL key just as browsers
//=================================
background.onMouseWheel = function (event) {
    var size = Number(preferences.clockSize.value),
        maxLength = Number(preferences.clockSize.maxLength),
        minLength = Number(preferences.clockSize.minLength),
        ticks = Number(preferences.clockSize.ticks),
        step = Math.round((maxLength - minLength) / (ticks - 1));

    if (event.ctrlKey) {
        if (event.scrollDelta > 0) {
            if (preferences.MouseWheelPref.value === "up") {
                size -= step;
                if (size < minLength) {
                    size = minLength;
                }
            } else {
                size += step;
                if (size > maxLength) {
                    size = maxLength;
                }
            }
        } else if (event.scrollDelta < 0) {
            if (preferences.MouseWheelPref.value === "up") {
                size += step;
                if (size > maxLength) {
                    size = maxLength;
                }
            } else {
                size -= step;
                if (size < minLength) {
                    size = minLength;
                }
            }
        }
        preferences.clockSize.value = String(size);
        sizeClock();
    }
};
//=====================
//End function
//=====================

//=================================
// initialise the main timer loop
//=================================
var storageTimer = new Timer();
storageTimer.ticking = true;
storageTimer.interval = preferences.sampleIntervalPref.value;
//=================================
// timer ends
//=================================

//=================================
// main timer loop
//=================================
storageTimer.onTimerFired = function () {
    updateStorage();
};
//=====================
//End function
//=====================

//=================================
// timer to fade the buttons
//=================================
deleteTimer.onTimerFired = function () {
    deleteTimer.ticking = false;
    if (filesystem.itemExists(konPath2)) {
        print("Attempting to perform housekeeping on the spawned widget startup file " + konPath2);
        filesystem.remove(konPath2);
    }
    if (filesystem.itemExists(konPath2)) {
        print("Failed to delete as it is an open widget, so waiting for a while to try again");
        deleteTimer.ticking = true;
        deleteTimer.interval = 30;
    } else {
        print("Successfully deleted the spawned .widget file.");
        print("Housekeeping DONE.");
    }
};
//=====================
//End function
//=====================

//===============================================================
// this function is the main start point
//===============================================================
function startup() {
    debugFlg = preferences.debugflgPref.value;
    if (debugFlg === "1") {
		preferences.imageEditPref.hidden=false;
	} else {
		preferences.imageEditPref.hidden=true;		
	}
	
	sizeClock();
    setTextAreas();
    mainScreen();
    createLicence(mainWindow);
    //selectDriveLetter();
     
    storageTimer.interval = 4; // the interval is temporarily reduced and the update is triggered
    //updateStorage(); // don't want it to run here instead run it under the timer within one second
    setmenu();
    settooltip();
    checkLockWidget();
    buildVitality(currIcon, 0); // build the dock vitality
}
//=====================
//End function
//=====================

//===============================================================
// this function is called when the widget loads
//===============================================================
widget.onload = function () {
    startup();
};
//=====================
//End function
//=====================

//===============================================================
// this function is called when the widget prefs are changed
//===============================================================
widget.onPreferencesChanged = function () {
    changePrefs();
    startup();
};
//=====================
//End function
//=====================

//===============================================================
// this function is called when the widget wakes up
//===============================================================
widget.onWakeFromSleep = function () {
    updateStorage();
};
//=====================
//End function
//=====================

//===============================================================
// this function defines the keyboard events captured
//===============================================================
mainWindow.onKeyDown = function (event) {
    if (event.keyCode === 116) {        //F5
        print("pressing " + event.keyCode);
        reloadWidget();
    }
};
//=====================
//End function
//=====================

//===============================================================
// this function matches the Xwidget's middle button drive selection
//===============================================================
switchFacesButton.onMouseDown = function () {
    letterBack.onMouseDown();
};
//=====================
//End function
//=====================

//===============================================================
// this function captures a drive letter click
//===============================================================
letterBack.onMouseDown = function () {
    if (preferences.soundPref.value !== "disabled") {
        play(till, false);
    }
    vols = filesystem.volumes;
    volsCnt = vols.length;
    chosenVol = (chosenVol + 1) % volsCnt;
    storageTimer.interval = 1;
    //updateStorage(); // the interval is temporarily reduced and the update is triggered quickly
//  selectDriveLetter();
};
//=====================
//End function
//=====================

//=====================
// ths function reacts to a mouse wheel on the drive selecter
//=====================
letterBack.onMouseWheel = function (event) {
    if (event.ctrlKey) {
        return;      // if the ctrl key is pressed then assume the user is trying to resize
    }
    if (preferences.soundPref.value !== "disabled") {
        play(till, false);
    }
    if (event.scrollDelta > 0) {
        vols = filesystem.volumes;
        volsCnt = vols.length;
        chosenVol = (chosenVol + 1) % volsCnt;
        storageTimer.interval = 1;
        //updateStorage(); // the interval is temporarily reduced and the update is triggered quickly
        //selectDriveLetter();
    } else if (event.scrollDelta < 0) {
        vols = filesystem.volumes;
        volsCnt = vols.length;
        chosenVol = chosenVol - 1;
        if (chosenVol < 0) {
            chosenVol = volsCnt - 1;
        }
        storageTimer.interval = 1;
        //updateStorage(); // the interval is temporarily reduced and the update is triggered quickly
        //selectDriveLetter();                        
    }
};
//=====================
//End function
//=====================
                             
//======================================================================================
// Function to make text areas visible rather than text objects
//======================================================================================
function setTextAreas() {
    if (system.platform === "macintosh") {
      storageMaxTextArea.visible = true;
      storagePercTextArea.visible = true;
    } else {
      storageMaxText.visible = true;
      storagePercText.visible = true;
    }
}
//=====================
//End function
//=====================

//===============================================================
// this function fires the main event on a double click
//===============================================================
background.onMultiClick = function() {
	if (preferences.soundPref.value !== "disabled") {
		play(ting, false);
	}
	storageTimer.interval = 1;
	//updateStorage(); // the interval is temporarily reduced and the update is triggered quickly
};
//=====================
//End function
//=====================

//===============================================================
// this function fires the main event on a double click
//===============================================================
background.onMultiClick = function(event) {
	if (preferences.soundPref.value !== "disabled") {
		play(ting, false);
	}
	
	if (event.ctrlKey) {
        print("updating the display");
		storageTimer.interval = 1;
		//updateStorage(); // the interval is temporarily reduced and the update is triggered quickly
    } else {
        if (preferences.imageCmdPref.value === "" && system.platform === "macintosh") {
        	preferences.imageCmdPref.value = "/Applications/Utilities/Disk Utility.app";
        }
        if (preferences.imageCmdPref.value === "" && system.platform === "windows") {
        	preferences.imageCmdPref.value = "%SystemRoot%/system32/diskmgmt.msc";
        }
    	performCommand("click");
    }
};
//=====================
//End function
//=====================



//=====================
//End script.js
//=====================