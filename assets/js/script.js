// when I hit start a timer starts and the quiz starts
// if answer is right score will be increased by one
// if wrong it will shorten remaining time left on the timer
// after quiz allow recording of scores with name and show previous scores


//Sets the default duration of timer
var secondsLeft = 500
var timerDisplay = document.querySelector('.time-left')
var startBtn = document.querySelector('#start-button')
var questionResult = document.querySelector('.question-result')
var question1 = document.querySelector('.question-1')
//TO DO  DO THE SAME AS ABOVE FOR OTHER QUESTIONS
var answer

question1.style.visibility = "hidden"
//TO DO  DO THE SAME AS ABOVE FOR OTHER QUESTIONS

//TO ADD WHEN WRONG TAKES AWAY TIME FROM THE TIMER, CANNOT BE SELECTED MULTIPLE TIMES
startBtn.addEventListener('click', function () {
    var timer = setInterval(function () {
        secondsLeft--
        timerDisplay.textContent = secondsLeft + ' Seconds Remaining';
        startBtn.style.visibility = 'hidden'
        question1.style.visibility = 'visible'
        // TO DO, DO THE SAME AS ABOVE FOR OTHER QUESTIONS

        // If answer wrong, it will take an additional amount of time off and states that it is incorrect
        if (answer === 'Incorrect') {
            secondsLeft = secondsLeft - 9
            questionResult.textContent = 'Incorrect'
        }
        // sets back to counting down by one so it does not keep going down by number declared above
        if (answer = '') {
            secondsLeft = secondsLeft--
        }
        if (secondsLeft < 0) {
            timerDisplay.textContent = 'Game Over'
            clearInterval(timer)
            // TO DO DISPLAY FINISHED SCORE, HIDE EVERYTHING ELSE, ENTER AND SHOW SCORES
        }
    }, 1000)
})

var wrongAnswer1 = document.querySelector('.wrong-answer-1')
var wrongAnswer2 = document.querySelector('.wrong-answer-2')
var wrongAnswer3 = document.querySelector('.wrong-answer-3')
var rightAnswer = document.querySelector('.correct-answer')

wrongAnswer1.addEventListener('click', function (wrongAnswer) {
    answer = 'Incorrect'
    questionResult.setAttribute('style', 'color:red')
})
wrongAnswer2.addEventListener('click', function () {
    answer = 'Incorrect'
    questionResult.setAttribute('style', 'color:red')
})
wrongAnswer3.addEventListener('click', function () {
    answer = 'Incorrect'
    questionResult.setAttribute('style', 'color:red')
})
rightAnswer.addEventListener('click', function () {
    answer = 'Correct'
    questionResult.textContent = 'Correct'
    questionResult.setAttribute('style', 'color:green')
})
