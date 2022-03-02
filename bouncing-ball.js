const ball = document.getElementById('ball');
const ballSize = 100;
const velocity = 100;
let positionX = 100;
let positionY = 100;
let reverse = false;

function moveBall() {
    let maxX = document.body.clientWidth - ballSize;
    let maxY = document.body.clientHeight - ballSize;
    let minX = 0;
    let minY = 0;

    if (reverse) {
        positionX = positionX - velocity;
        positionY = positionY - velocity;
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    } else {
        positionX = positionX + velocity;
        positionY = positionY + velocity;
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    }

    if (
        positionX >= maxX ||
        positionX === minX ||
        positionY >= maxY ||
        positionY === minY
    ) {
        reverse = !reverse;
    }
}


setInterval(moveBall, 200);