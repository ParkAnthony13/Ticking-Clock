function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
    var hour = new Date().getHours()+30;
    // console.log(hour);
    var min = new Date().getMinutes()+30;
    console.log(min);
    var sec = new Date().getSeconds()+30;
    // console.log(sec);

    document.querySelector("#hour").style.transform = "rotate("+(hour*30)+"deg)";
    document.querySelector("#minutes").style.transform = "rotate("+(min*6)+"deg)";
    document.querySelector("#seconds").style.transform = "rotate("+(sec*6)+"deg)";

    var sHour = hour.toString();
    var sMin = min.toString();
    var sSec = (sec-(hour*3600+min*60)).toString();
    if (sHour.length < 2) {
        document.querySelector(".hr").innerHTML = "0"+hour-30;
    } else {
        document.querySelector(".hr").innerHTML = hour-30;
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

setInterval( function() {
    var milisecond = new Date().getMilliseconds();
    console.log(milisecond);
    var sMilisecond = milisecond.toString();
    if (sMilisecond == 2) {
        document.querySelector(".mili").innerHTML = "0" + milisecond;
    } else if (sMilisecond == 1) {
        document.querySelector(".mili").innerHTML = "00" + milisecond;
    } else {
        document.querySelector(".mili").innerHTML = milisecond;
    }
}, 1);
