let startTime, elapsedTime = 0, intervalId;
let lapCounter = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('lapsList');

function formatTime(ms) {
const totalSeconds = Math.floor(ms / 1000);
const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;
return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
startTime = Date.now() - elapsedTime;
intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}, 1000);

startBtn.disabled = true;
stopBtn.disabled = false;
resetBtn.disabled = false;
lapBtn.disabled = false;
}

function stopStopwatch() {
clearInterval(intervalId);
startBtn.disabled = false;
stopBtn.disabled = true;
}

function resetStopwatch() {
clearInterval(intervalId);
elapsedTime = 0;
display.textContent = "00:00:00";
lapsList.innerHTML = ""; 
lapCounter = 0; 
startBtn.disabled = false;
stopBtn.disabled = true;
resetBtn.disabled = true;
lapBtn.disabled = true;
}

function recordLap() {
lapCounter++;
const lapTime = formatTime(elapsedTime);
const li = document.createElement('li');
li.textContent = `Lap ${lapCounter}: ${lapTime}`;
lapsList.appendChild(li);
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);