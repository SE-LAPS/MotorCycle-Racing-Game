document.addEventListener('DOMContentLoaded', function() {


    document.addEventListener('keydown', function(e) {
        if (e.key == 'ArrowLeft') {
            MoveLeft()
        }
        if (e.key == 'ArrowRight') {
            MoveRight()
        }
    })

    function MoveLeft() {
        racer = document.querySelector('#racer')
        leftPos = parseInt(window.getComputedStyle(racer).getPropertyValue('left'))
        leftPos -= 100;
        if (leftPos >= 30) {
            console.log(racer)
            racer.style.left = leftPos + 'px';
        }

    }



    function MoveRight() {
        racer = document.querySelector('#racer')
        rightPos = parseInt(window.getComputedStyle(racer).getPropertyValue('left'))
        rightPos += 100;
        if (rightPos < 400) {

            racer.style.left = rightPos + 'px';
        }

    }
    track = document.querySelector('#track')
    challenger = document.querySelector('#challenger')
    document.addEventListener('animationiteration', function() {
        randomNumber = Math.floor(Math.random() * 3) * 100
        challenger.style.left = randomNumber + 'px';
    })
    score = 0;
    checkDead = setInterval(function() {
        score++
        racerLeft = parseInt(window.getComputedStyle(racer).getPropertyValue('left'))
        challengerLeft = parseInt(window.getComputedStyle(challenger).getPropertyValue('left'))
        challengertop = parseInt(window.getComputedStyle(challenger).getPropertyValue('top'))
        document.querySelector('#score').innerHTML = 'Score: ' + score
        if (racerLeft == challengerLeft && challengertop >= 400) {
            alert('😭game over😭 Your Score Is - ' + score)
            challenger.style.animation = 'none';
            track.style.animation = 'none';
            challenger.style.top = challengertop + 'px'
            console.log(challengertop)
            clearTimeout(checkDead)
        }
    }, 100)



})