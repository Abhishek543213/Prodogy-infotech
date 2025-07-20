let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

document.getElementById("startStop").addEventListener("click", function () {
    if (timer === null) {
        timer = setInterval(updateTime, 1000);
        this.textContent = "Pause";
    } else {
        clearInterval(timer);
        timer = null;
        this.textContent = "Start";
    }
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    display.textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    timer = null;
});

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${h}:${m}:${s}`;
}
