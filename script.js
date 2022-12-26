let digitalElement = document.querySelector('.digital');
let secElement = document.querySelector('.p_sec');
let minElement = document.querySelector('.p_min');
let hrElement = document.querySelector('.p_hr');
let bgElement = document.querySelector('.bg');
let ckElement = document.querySelector('.clock')

function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    digitalElement.innerHTML = `${zeroFix(hours)}:${zeroFix(minutes)}:${zeroFix(seconds)}`;

    let secDeg = ((360 / 60) * seconds) - 90;
    let minDeg = ((360 / 60) * minutes) - 90;
    let hrDeg = ((360 / 60) * hours) - 90;

    secElement.style.transform = `rotate(${secDeg}deg)`;
    minElement.style.transform = `rotate(${minDeg}deg)`;
    hrElement.style.transform = `rotate(${hrDeg}deg)`;

    function backgroundAtt(clock) {
        if (clock >= '18' || clock < '05') {
            bgElement.style.backgroundColor = `#010413`;
            ckElement.style.backgroundColor = `#3E434A`;
        } else
            if (clock < '18' || clock >= '05') {
                bgElement.style.backgroundColor = `#659BCF`;
                ckElement.style.backgroundColor = `rgba(254, 188, 39, 0.8)`;
            }
    };

    backgroundAtt(hours);
};


function zeroFix(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}



setInterval(updateClock, 1000)
updateClock();
