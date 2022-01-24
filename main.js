// Import other functions
import {countdownTimer} from './timerFunction.js'

// Grab elements from the DOM
const chairInput = document.getElementById("chair-input");
const minuteInput = document.getElementById("minute-input");
const submitBtn = document.getElementById("input-submit");
const mainDisplay = document.getElementById("mainDisplay")

// Global variables
let chairNum = 0
let newChairsArr = []

// Button Pressed 
submitBtn.addEventListener("click", function(e) {

    //Stop page refreshing
    e.preventDefault();

    // Assign values of input to new variables and turn to interger
    const newChairInput = parseInt(chairInput.value);
    const newMinuteInput = parseInt(minuteInput.value);

    // Create HTML div for chair display depending on user input
    for (let i = 0; i < newChairInput.length; i++) {

        chairNum += 1;

        const chairDiv = document.createElement("div");
        chairDiv.classList.add("chairArea");
        mainDisplay.appendChild(chairDiv);
        chairDiv.innerHTML += `
            <h2 id="chairBanner">Chair: </h2>
            <h4>Time Left: <span id="timer-display">15:00</span></h3>
            <button id="startBtn">Start Timer</button>
            <button id="resetBtn">Reset Timer</button>
        `;
    };
});