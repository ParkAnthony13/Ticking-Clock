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

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
    var hour = new Date().getHours()+30;
    console.log(hour);
    var min = new Date().getMinutes()+30;
    // console.log(min);
    var sec = new Date().getSeconds()+30;
    // console.log(sec);

    document.querySelector("#hour").style.transform = "rotate("+(hour*30)+"deg)";
    document.querySelector("#minutes").style.transform = "rotate("+(min*6)+"deg)";
    document.querySelector("#seconds").style.transform = "rotate("+(sec*6)+"deg)";

    var sHour = hour.toString();
    var sMin = min.toString();
    var sSec = (sec-(hour*3600+min*60)).toString();
    var twoCycle = hour - 30;
    console.log(twoCycle);
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
    if (min < 40) {
        document.querySelector(".min").innerHTML = "0"+min-30;
    } else {
        document.querySelector(".min").innerHTML = min-30;
    }
    if (sec < 40) { /* because we add 30 to seconds, 60 seconds in a minute ranges from 30seconds to 90seconds. It is always 2 digits, so condition checks <40 because 39 (or 09) is the last single digit second */
        document.querySelector(".sec").innerHTML = "0"+(sec-30);
    } else {
        document.querySelector(".sec").innerHTML = sec-30;
    }
}, 1000);

// if (twoCycle < 2) {
//     document.querySelector(".hr").innerHTML = "0"+hour-30;
// } else {
//     document.querySelector(".hr").innerHTML = hour-30;

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
