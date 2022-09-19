const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let newYears = '01 Jan 2023';

//---
document.querySelector(".btn").addEventListener("click", myClick);
function myClick() {
    let a = document.querySelector("input").value;
    newYears.innerHTML = a;
	newYears = a;
	// console.log(`a = ${a}`);
	// console.log(`newYears = ${newYears}`);
    countdown();
    setInterval(countdown, 1000);
    
}
//--


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000);

// document.querySelector('.btn').onclick = myClick;
// document.querySelector('.btn').addEventListener('click', myClick);
// function myClick() {
// 	let inputValue = document.querySelector('input').value;
// 	document.querySelector('.out').innerHTML = inputValue;
// }
