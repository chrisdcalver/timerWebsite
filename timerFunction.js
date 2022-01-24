
    // Set var for start time, starttime in secs and global var to be used as arguement in setInterval and clearInterval function
    // Set mins and secs var
    // If secs is single 0 then set so 00 format
    // Render to HTML
    // setInterval (assigned to var to be used later)
    // clearInterval (using the var assigned to setInterval)

export function countdownTimer() {

    const startMinutes = 15
    let time = startMinutes * 60
    let startTimer

    const timerEl = document.getElementById('timer-display')
    const startBtn = document.getElementById('startBtn')
    const resetBtn = document.getElementById('resetBtn')

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

    startBtn.addEventListener('click', function () {
        startTimer = setInterval(updateCountdown, 1000)
    })

    // Own function for now however if not reused then refactor into resetBtn code below
    function resetTimer() {
        clearInterval(startTimer)
        timerEl.innerHTML = " 15:00"
    }

    resetBtn.addEventListener('click', resetTimer)
}