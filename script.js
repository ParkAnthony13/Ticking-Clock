function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var hour = new Date().getHours()+30;
    console.log(hour);
    var min = new Date().getMinutes()+30;
    console.log(min);
    var sec = new Date().getSeconds()+30;

    document.querySelector("#hour").style.transform = "rotate("+(hour*30)+"deg)";
    document.querySelector("#minutes").style.transform = "rotate("+(min*6)+"deg)";
    document.querySelector("#seconds").style.transform = "rotate("+(sec*6)+"deg)";

    var sHour = hour.toString();
    var sMin = min.toString();
    var sSec = sec.toString();
    if (sHour.length < 2) {
        document.querySelector(".hr").innerHTML = "0"+hour-30;
    } else {
        document.querySelector(".hr").innerHTML = hour-30;
    }
    if (sMin.length < 2) {
        document.querySelector(".min").innerHTML = "0"+min-30;
    } else {
        document.querySelector(".min").innerHTML = min-30;
    }
    if (sSec.length < 2) {
        document.querySelector(".sec").innerHTML = "0"+sec-30;
    } else {
        document.querySelector(".sec").innerHTML = sec-30;
    }
}, 1000);