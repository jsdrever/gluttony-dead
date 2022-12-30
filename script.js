//make a startGame function
//make a timer setTimeout(myFunction, milliseconds, arg(s))

function timeOut() {
    setTimeout(setAlert, 400000);
}
function setAlert() {
  alert("Time's Up!");
}
const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
}

function setNextQuestion() {

}

function selectAnswer() {

}

let questions = [
    {
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "5",
        choice4: "8",
        answer: 2,
    },
    {
        question: "what is my dogs name?",
        choice1: "Riley",
        choice2: "Dogmeat",
        choice3: "Pookie",
        choice4: "Cuddle-Bug",
        answer: 1,
    },
    {
        question: "Is my dog a good boy?",
        choice1: "nah, he's fat",
        choice2: "ew, I don't like him",
        choice3: "He's ok, I guess...",
        choice4: "OMG! Yes. I love him.",
        answer: 4,
    },
    {
        question: "what this educational?",
        choice1: "91.412 million miles",
        choice2: "7.837 billion as of 2021",
        choice3: "It was educational for you to build this and that's what really mattered",
        choice4: "The Triassic Period",
        answer: 3,
    },
]