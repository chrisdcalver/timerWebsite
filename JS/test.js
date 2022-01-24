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

