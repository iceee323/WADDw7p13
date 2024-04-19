function updateClock(clockID, hoursDiff) {
const time = new Date();
console.log(time);
const hour = time.getHours() + hoursDiff;
}

updateClock("york", 0);
updateClock("sydney", 11);