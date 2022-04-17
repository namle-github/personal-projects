const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Parse new year's eve date
const currentDate = new Date();
const newYear = currentDate.getFullYear() + 1
const newYearsEve = '1 Jan ' + newYear;
console.log("new year:", newYearsEve)

function countDown() {
    const newYearsDate = new Date(newYearsEve);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10? `0${time}` : time;
}

setInterval(countDown, 1000);