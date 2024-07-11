var timerInterval;
var score = 0;


function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function makeBubble() {
    var clutter = ""

    for (var i = 0; i < 85; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += <div class="bubble">${rn}</div>;
    }

    document.querySelector('#pbtm').innerHTML = clutter;

}

function runTimer() {
    timerInterval = setInterval(function () {
        if (timer == 0) {
            clearInterval(timerInterval);
            document.querySelector('#pbtm').innerHTML = `
            <div class="game-over">
            <h1>Game Over</h1>
            <h3>Your Score : ${score}</h3>
            </div>
            `;

            document.querySelector('#scoreval').textContent = 0;
        } else {
            timer--;
            document.querySelector('#timer').innerHTML = timer;
        }
    }, 1000);
}

function getNewHit() {
    var rn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = rn;
}


document.querySelector('#pbtm').addEventListener('click', (e) => {
    var clickVal = e.target.textContent;
    var hitVal = document.querySelector('#hitval').textContent;

    if (clickVal === hitVal) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();