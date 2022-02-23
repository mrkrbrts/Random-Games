//////////
// TABLE OF CONTENTS
// 01: Players List
// // *A: Buttons
// // *B: Functions
// 02: Random Name
//////////


//////////
// 01: PLAYERS LIST
//////////

let playersList = document.getElementById("players-list");

const addPlayersInput = document.getElementById("add-players-input")

let playersNames = [];
let tempPlayersNames = [];


//////////
// 01: PLAYERS LIST
// // *A: Buttons
//////////

const addPlayersBtn = document.getElementById("add-players-btn");
const editPlayersBtn = document.getElementById("edit-players-btn");
const deletePlayersBtn = document.getElementById("delete-players-btn")


addPlayersBtn.addEventListener("click", function() {
    if (addPlayersInput.value) {
        playersNames.push(addPlayersInput.value)
        tempPlayersNames.push(addPlayersInput.value)
        console.log(playersNames)
        renderNames()
        clearInput(addPlayersInput)
        addPlayersInput.focus()
    }
})

editPlayersBtn.addEventListener("click", consoleLog)

deletePlayersBtn.addEventListener("click", function() {
    deleteAllNames()
    clearInput(addPlayersInput)
})

//////////
// 01: PLAYERS LIST
// // *B: Functions
//////////

function clearInput(input) {
    input.value = ""
}

function deleteAllNames() {
    playersList.innerHTML = ""
    playersNames = []
    tempPlayersNames = []
}

function renderNames() {
    playersList.innerHTML = ""

    for (let i = 0; i < playersNames.length; i++) {
        playersList.innerHTML += `<li>${playersNames[i]}<button class="delete"></button></li>`
    }
}




//////////
// 02: RANDOM NAME
//////////

const randomName = document.getElementById("random-name")

const randomNameWarning = document.getElementById("random-name-warning")

const randomNameCheckbox = document.getElementById("random-name-checkbox")


//////////
// 02: RANDOM NAME
// // *A: Buttons
//////////

const randomNameBtn = document.getElementById("random-name-btn")

randomNameBtn.addEventListener("click", function() {
    if (randomNameCheckbox.checked === false) {
        let randomNum = Math.floor(Math.random() * playersNames.length)
    
        randomName.innerHTML = playersNames[randomNum]
    } else if (randomNameCheckbox.checked === true) {
        if (tempPlayersNames[0]) {
            let randomNum = Math.floor(Math.random() * tempPlayersNames.length)
    
            randomName.innerHTML = tempPlayersNames[randomNum]
    
            tempPlayersNames.splice(randomNum, 1);
    
        }
    }
    
})

const randomNameResetBtn = document.getElementById("random-name-reset")

randomNameResetBtn.addEventListener("click", function() {
    reset()
})


//////////
// 02: RANDOM NAME
// // *B: Functions
//////////



//////////
// MISC.
//////////



function consoleLog() {
    console.log("console log")
}

function reset() {
    tempPlayersNames = playersNames;
    randomName.innerHTML = "";
    console.log(tempPlayersNames)
}