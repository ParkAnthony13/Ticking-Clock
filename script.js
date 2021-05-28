function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}
var toggle = document.querySelector('.cycle').innerHTML;
function changeClock(element) {
    if (toggle == "12 Hour Clock") {
        toggle = "24 Hour Clock";
        console.log(toggle);
        element.innerHTML = "24 Hour Clock";
    } else if (toggle == "24 Hour Clock") {
        toggle = "12 Hour Clock";
        console.log(toggle);
        element.innerHTML = "12 Hour Clock";
    }
}
function stopWatch(element) {
    if (element.innerHTML == "Stop Watch: Off") {
        element.innerHTML = "Stop Watch: On";
        document.querySelector(".popTimer").style.display = "flex";
    } else if (element.innerHTML == "Stop Watch: On") {
        element.innerHTML = "Stop Watch: Off";
        document.querySelector(".popTimer").style.display = "none";
    }
}


setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var hour = new Date().getHours();
    console.log(hour);
    var min = new Date().getMinutes();
    console.log(min);
    var sec = new Date().getSeconds();
    console.log(sec);

    document.querySelector("#hour").style.transform = "rotate("+((hour+30)*30)+"deg)";
    document.querySelector("#minutes").style.transform = "rotate("+((min+30)*6)+"deg)";
    document.querySelector("#seconds").style.transform = "rotate("+((sec+30)*6)+"deg)";

    var twoCycle = hour;
    // console.log(twoCycle);
    if (toggle == "12 Hour Clock") {
        if (twoCycle > 12) {
            twoCycle = twoCycle-12;
            twoCycle = twoCycle.toString();
        } else {
            twoCycle = twoCycle.toString();
        }
        if (twoCycle.length < 2) {
            document.querySelector(".hr").innerHTML = "0"+ twoCycle;
        } else {
            document.querySelector(".hr").innerHTML = twoCycle;
        }
    } else if (toggle == "24 Hour Clock") {
        if (twoCycle.length < 2) {
            document.querySelector(".hr").innerHTML = "0"+ twoCycle;
        } else {
            document.querySelector(".hr").innerHTML = twoCycle;
        }
    }
    console.log(min);
    if (min.length < 2) {
        document.querySelector(".min").innerHTML = "0"+ min;
    } else {
        document.querySelector(".min").innerHTML = min;
    }
    if (sec.length < 2) { /* because we add 30 to seconds, 60 seconds in a minute ranges from 30seconds to 90seconds. It is always 2 digits, so condition checks <40 because 39 (or 09) is the last single digit second */
        document.querySelector(".sec").innerHTML = "0"+(sec);
    } else {
        document.querySelector(".sec").innerHTML = sec;
    }
}, 1000);

function timer() {
    var d = new Date();
    var startHour = d.getHours();
    var startMin = d.getMinutes();
    var startSec = d.getSeconds();
    var startMili = d.getMilliseconds();
    console.log(startHour, startMin, startSec);
    setInterval( function() {
        var hour = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        document.querySelector(".hrStop").innerHTML = hour - startHour;
        document.querySelector(".minStop").innerHTML = min - startMin;
        document.querySelector(".secStop").innerHTML = sec - startSec;
    }, 1000);
    setInterval( function() {
        var milisecond = new Date().getMilliseconds();
        var sMilisecond = milisecond.toString();
        if (sMilisecond == 2) {
            document.querySelector(".miliStop").innerHTML = "0" + (milisecond-startMili);
        } else if (sMilisecond == 1) {
            document.querySelector(".miliStop").innerHTML = "00" + (milisecond-startMili);
        } else {
            document.querySelector(".miliStop").innerHTML = (milisecond-startMili);
        }
    }, 1);
}   



setInterval( function() {
    var milisecond = new Date().getMilliseconds();
    // console.log(milisecond);
    var sMilisecond = milisecond.toString();
    if (sMilisecond == 2) {
        document.querySelector(".mili").innerHTML = "0" + milisecond;
    } else if (sMilisecond == 1) {
        document.querySelector(".mili").innerHTML = "00" + milisecond;
    } else {
        document.querySelector(".mili").innerHTML = milisecond;
    }
}, 1);
