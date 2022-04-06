var secondsLeft = 30
var timerDisplay = document.querySelector('.time-left')
var startBtn = document.querySelector('#start-button')
var questionResult1 = document.querySelector('.question-result-1')
var questionResult2 = document.querySelector('.question-result-2')
var questionResult3 = document.querySelector('.question-result-3')
var scoreList = document.querySelector('.score-list')
var initialsList = document.querySelector('.initials-list')

saved()
previousScore()

function saved() {
var score = localStorage.getItem(score)
var initials = localStorage.getItem('initials')
}

function previousScore() {
var score = localStorage.getItem('score')
var initials = localStorage.getItem('initials')
scoreList.textContent = score + ':'
initialsList.textContent = initials
}

startBtn.addEventListener('click', function () {
    start()
    var timer = setInterval(function () {
        secondsLeft--
        timerDisplay.textContent = secondsLeft + ' Seconds Remaining';
        startBtn.style.visibility = 'hidden'
        if (secondsLeft < 0) {
            timerDisplay.textContent = 'Game Over'
            question1.style.visibility = 'hidden'
            question2.style.visibility = 'hidden'
            question3.style.visibility = 'hidden'
            next1.style.visibility = 'hidden'
            next2.style.visibility = 'hidden'
            clearInterval(timer)
        }
    }, 1000)
})

score = 0

// localStorage.setItem('score', score)

function start() {
    question1.style.visibility = 'visible'
}
var question1 = document.querySelector('.question-1')
var question2 = document.querySelector('.question-2')
var question3 = document.querySelector('.question-3')

question1.style.visibility = 'hidden'
question2.style.visibility = 'hidden'
question3.style.visibility = 'hidden'

var next1 = document.querySelector('#next-1')
var next2 = document.querySelector('#next-2')
var next3 = document.querySelector('#next-3')
next1.style.visibility = 'hidden'
next2.style.visibility = 'hidden'
next3.style.visibility = 'hidden'

next1.addEventListener('click', Next1)
function Next1() {
    // question1.style.visibility = 'hidden'
    question2.style.visibility = 'visible'
    next1.style.visibility = 'hidden'
}

next2.addEventListener('click', Next2)
function Next2() {
    // question2.style.visibility = 'hidden'
    question3.style.visibility = 'visible'
    next2.style.visibility = 'hidden'
}

// next 3 button for adding future questions
// next3.addEventListener('click', Next3)
// function Next3() {
//     question3.style.visibility = 'hidden'
//     question4.style.visibility = 'visible'
//     next3.style.visibility = 'hidden'
// }

var wrongAnswer1 = document.querySelector('.wrong-answer-1')
var wrongAnswer2 = document.querySelector('.wrong-answer-2')
var wrongAnswer3 = document.querySelector('.wrong-answer-3')
var rightAnswer1 = document.querySelector('.correct-answer-1')

wrongAnswer1.addEventListener('click', incorrect1)
wrongAnswer2.addEventListener('click', incorrect1)
wrongAnswer3.addEventListener('click', incorrect1)
rightAnswer1.addEventListener('click', correct1)

function correct1() {
    questionResult1.textContent = 'Correct'
    questionResult1.style.color = 'green'
    wrongAnswer1.style.visibility = 'hidden'
    wrongAnswer2.style.visibility = 'hidden'
    wrongAnswer3.style.visibility = 'hidden'
    rightAnswer1.style.visibility = 'hidden'
    next1.style.visibility = 'visible'

    score++
    scoring.textContent = score
    localStorage.setItem('score', score)
}

function incorrect1() {
    questionResult1.textContent = 'Incorrect'
    questionResult1.style.color = 'red'
    wrongAnswer1.style.visibility = 'hidden'
    wrongAnswer2.style.visibility = 'hidden'
    wrongAnswer3.style.visibility = 'hidden'
    rightAnswer1.style.visibility = 'hidden'
    secondsLeft = secondsLeft - 5
    next1.style.visibility = 'visible'
}

var wrongAnswer4 = document.querySelector('.wrong-answer-4')
var wrongAnswer5 = document.querySelector('.wrong-answer-5')
var wrongAnswer6 = document.querySelector('.wrong-answer-6')
var rightAnswer2 = document.querySelector('.correct-answer-2')

wrongAnswer4.addEventListener('click', incorrect2)
wrongAnswer5.addEventListener('click', incorrect2)
wrongAnswer6.addEventListener('click', incorrect2)
rightAnswer2.addEventListener('click', correct2)

function correct2() {
    questionResult2.textContent = 'Correct'
    questionResult2.style.color = 'green'
    wrongAnswer4.style.visibility = 'hidden'
    wrongAnswer5.style.visibility = 'hidden'
    wrongAnswer6.style.visibility = 'hidden'
    rightAnswer2.style.visibility = 'hidden'
    next2.style.visibility = 'visible'
    score++
    scoring.textContent = score
    localStorage.setItem('score', score)
}
function incorrect2() {
    questionResult2.textContent = 'Incorrect'
    questionResult2.style.color = 'red'
    wrongAnswer4.style.visibility = 'hidden'
    wrongAnswer5.style.visibility = 'hidden'
    wrongAnswer6.style.visibility = 'hidden'
    rightAnswer2.style.visibility = 'hidden'
    secondsLeft = secondsLeft - 5
    next2.style.visibility = 'visible'
}

var wrongAnswer7 = document.querySelector('.wrong-answer-7')
var wrongAnswer8 = document.querySelector('.wrong-answer-8')
var wrongAnswer9 = document.querySelector('.wrong-answer-9')
var rightAnswer3 = document.querySelector('.correct-answer-3')

wrongAnswer7.addEventListener('click', incorrect3)
wrongAnswer8.addEventListener('click', incorrect3)
wrongAnswer9.addEventListener('click', incorrect3)
rightAnswer3.addEventListener('click', correct3)

function correct3() {
    questionResult3.textContent = 'Correct'
    questionResult3.style.color = 'green'
    wrongAnswer7.style.visibility = 'hidden'
    wrongAnswer8.style.visibility = 'hidden'
    wrongAnswer9.style.visibility = 'hidden'
    rightAnswer3.style.visibility = 'hidden'
    // next3.style.visibility = 'visible'
    score++
    scoring.textContent = score
    localStorage.setItem('score', score)
}
function incorrect3() {
    questionResult3.textContent = 'Incorrect'
    questionResult3.style.color = 'red'
    wrongAnswer7.style.visibility = 'hidden'
    wrongAnswer8.style.visibility = 'hidden'
    wrongAnswer9.style.visibility = 'hidden'
    rightAnswer3.style.visibility = 'hidden'
    secondsLeft = secondsLeft - 5
    // next3.style.visibility = 'visible'
}

var scoring = document.querySelector('#scoring')
var saveBtn = document.querySelector('#save-btn')


saveBtn.addEventListener('click', function(event) {
event.preventDefault()
var scoring = document.querySelector('#scoring').value
var initials = document.querySelector('#initials').value

localStorage.setItem('initials', initials)
localStorage.setItem('score', score)
saved()
})

