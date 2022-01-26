/* 
import {countdownTimer} from './timerFunction.js'
 */

/* 
const chairInput = document.getElementById("chair-input")
const minuteInput = document.getElementById("minute-input")
const submitBtn = document.getElementById('input-submit')
const mainDisplay = document.querySelector('.mainDisplay')

let newChairsArr = []
let chairNum = 0
 */


/* 
let newChairNum = 0
document.getElementById("chairBtn").addEventListener("click", function(e) {
   
    let newValue = parseInt(chairInput.value)
    for (let i = 0; i < newValue; i++) {
        newChairNum += 1
        textTag.innerHTML += `
        <div class="chairArea">
            <h2 id="chairBanner">Chair: ${newChairNum}</h2>
            <h4>Time Left: <span id="timer-display">15:00</span></h3>
            <button id="startBtn">Start Timer</button>
            <button id="resetBtn">Reset Timer</button>
        </div>
    `
    }
})
 */


/* 
function addNewChair() {

    // New div to mainDisplay
    const divTag = document.createElement('div')
    divTag.classList.add('chairArea')
    mainDisplay.appendChild(divTag);
    newChairsArr.push(divTag)

    // h2 to newly created chairArea Div
    const h2Tag = document.createElement('h2')
    h2Tag.classList.add('chairBanner')
    divTag.appendChild(h2Tag)
    h2Tag.innerHTML = `Chair: ${chairNum += 1}`

    // Timer tag
    const timerTag = document.createElement('h4')
    timerTag.classList.add('timer-display')
    divTag.appendChild(timerTag)
    timerTag.innerHTML = "15:00"

    // Start Button tag
    const startBtnTag = document.createElement('button')
    startBtnTag.classList.add('startBtn')
    divTag.appendChild(startBtnTag)
    startBtnTag.innerHTML = "Start"

    // Reset Button tag
    const resetBtnTag = document.createElement('button')
    resetBtnTag.classList.add('resetBtn')
    divTag.appendChild(resetBtnTag)
    resetBtnTag.innerHTML = "Reset"

    console.log(mainDisplay)
}
 */

/* 
// Testing getting the value over from the DOM
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const submitBtn = document.getElementById("submit-btn");
const nameOutput = document.getElementById("name-output");
const ageOutput = document.getElementById("age-output");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault()
    const newNameInput = nameInput.value
    nameOutput.innerHTML = newNameInput
    console.log(typeof(newNameInput))

    const newAgeInput = parseInt(ageInput.value)
    ageOutput.innerHTML = newAgeInput + 5
    console.log(typeof(newAgeInput))
})
 */


/* 
1. Will need callback function - can't use timer function until new html been generating
2. Change timer button (start and reset) from timerFuntion.js from ID's to new classes.
3. Somehow link with div's generated based on user input
4. Timer being dependend on user input
5. Banner changing colour when reaches zero so obvious can go
6. Have chair number (? for loop needed)
7. Need to set a min-height to the main-display CSS
*/

/* 
<div class="chairArea">
    <h2 id="chairBanner">Chair: </h2>
    <h4>Time Left: <span id="timer-display">15:00</span></h3>
    <button id="startBtn">Start Timer</button>
    <button id="resetBtn">Reset Timer</button>
</div> 
*/