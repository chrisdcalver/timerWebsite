const submitBtn = document.getElementById("submit-btn");
const mainSection = document.getElementById("main-section");

/* function createNewHTML() {
    const newDiv = document.createElement("div")
    newDiv.id = "test-id"
    newDiv.innerHTML = `
    <h3>Does this work</h3>
    <p id="html-id">Let's see if we can change this test</p>
    <button id="test-btn">Press Me</button>
`
    mainSection.appendChild(newDiv)

    const htmlId = document.getElementById("html-id");
    const testBtn = document.getElementById("test-btn");
    testBtn.addEventListener("click", function() {
        htmlId.id = "newText"
    })
}

createNewHTML() */

const testBtn = document.getElementById("test1");
testBtn.addEventListener("click", function() {

    for (let i = 0; i < 3; i++) {
        const newDiv = document.createElement("div")
        newDiv.id = "test-id"
        newDiv.innerHTML = `
        <h3>Does this work</h3>
        <p id="html-id">Let's see if we can change this test</p>
        <button id="test-btn">Press Me</button>
    `
        mainSection.appendChild(newDiv)
    }

    const htmlId = document.querySelector("#html-id");
    const testBtn = document.getElementById("#test-btn");
    testBtn.addEventListener("click", function() {
        htmlId.classList.add(newText)
    })
})