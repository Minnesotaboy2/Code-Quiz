// when I hit start a timer starts and the quiz starts
// when I answer a question it displays whether the answer was right or wrong
// if answer is right score will be increased by one
// if wrong it will shorten remaining time left on the timer
// after quiz allow recording of scores with name and show previous scores

var secondsLeft = 5
var timerDisplay = document.querySelector('.time-left')
var startBtn = document.querySelector('#start-button')


startBtn.addEventListener('click', function () {
    var timer = setInterval(function () {
        secondsLeft--
        timerDisplay.textContent = secondsLeft + ' Seconds Remaining';
        if (secondsLeft < 0) {
            timerDisplay.textContent = 'Game Over'
            clearInterval(timer)
        }
    }, 1000)

})
