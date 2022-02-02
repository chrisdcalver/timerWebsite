// Grab elements from the DOM
const chairInput = document.getElementById("chair-input");
const minuteInput = document.getElementById("minute-input");
const submitBtn = document.getElementById("input-submit");
const mainDisplay = document.getElementById("mainDisplay")

// Global variables
let chairNum = 0
let chairArr = []
// let timerFunctions = countdownTimer()
// let startTimer = timerFunctions[0]
// let resetTimer = timerFunctions[1]

function renderDisplay() {

    // Button Pressed 
    submitBtn.addEventListener("click", function (e) {

        //Stop page refreshing
        e.preventDefault();

        // Assign values of input to new variables and turn to interger
        const newChairInput = parseInt(chairInput.value);
        const newMinuteInput = parseInt(minuteInput.value);

        // Create HTML div for chair display depending on user input
        for (let i = 0; i < newChairInput; i++) {

            chairNum += 1;

            const chairDiv = document.createElement("div");
            chairDiv.classList.add("chairArea")
            chairDiv.innerHTML += `
                <h2 id="chairBanner">Chair: ${chairNum}</h2>
                <h4>Time Left: <span id="timer-display">${newMinuteInput}:00</span></h4>
                <button id="startBtn">Start Timer</button>
                <button id="resetBtn">Reset Timer</button>
        `;
            mainDisplay.appendChild(chairDiv);
        }; // for loop

    }); // submitBtn click

} // renderDisplay()

function countdownTimer() {

    const startMinutes = parseInt(minuteInput.value)
    let time = startMinutes * 60
    let startTimer

    const timerEl = document.getElementById("timer-display")
    const startBtn = document.getElementById("startBtn")
    const resetBtn = document.getElementById("resetBtn")

    function updateCountdown() {

        const minutes = Math.floor(time / 60)
        let seconds = time % 60 // Whatever is left after divided into 60

        seconds = seconds < 10 ? '0' + seconds : seconds

        timerEl.innerHTML = `${minutes}:${seconds}`
        time-- // reduced time by 1 every 1 sec (as set in the setInterval method)

        // If timer gets to zero to reset rather than keep going
        if (minutes < 0) {
            resetTimer()
        }
    }

    function startBtnFn() {
        startTimer = setInterval(updateCountdown, 1000)
    }

    // Own function for now however if not reused then refactor into resetBtn code below
    function resetBtnFn() {
        clearInterval(startTimer)
        timerEl.innerHTML = startMinutes + ":00"
    }

    return [startBtnFn, resetBtnFn]

    // resetBtn.addEventListener('click', resetTimer)
}

renderDisplay()

countdownTimer()