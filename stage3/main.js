function updateClock(clockID, hoursDiff) {
    const time = new Date();
    console.log(time);

    const hour = (time.getHours() + hoursDiff) % 24;
    console.log("hour " + hour);
    const convertedHour = hour % 12;
    console.log("convertH " + convertedHour);

    const min = time.getMinutes();
    console.log("mins " + min);

    const sec = time.getSeconds();
    console.log("sec " + sec);


    function rotateHand(className, value, rot) {
        const clock = document.getElementById(clockID);
        clock.getElementsByClassName(className)[0].style.transform = "translateX(100px) rotate(" + value/rot*360 + "deg)";
    }

    rotateHand("hour", hour, 12);
    rotateHand("minute", min, 60);
    rotateHand("second", sec, 60);

    const amPmID = clockID + "-am-pm"; //clockID = york/syd, then + string to select
    const amPm = document.getElementById(amPmID); //select
    amPm.innerText = hour >= 12 ? "PM" : "AM"; //if hour greater/eq 12 -> pm else am
}

setInterval(function () {
    updateClock("york", 0);
    updateClock("sydney", 11);
}, 1000);