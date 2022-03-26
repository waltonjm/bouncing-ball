var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");

function moveBall() {
    var Xmin = 0;
    var Xmax = 1075;

    var Ymin = 0;
    var Ymax = 1075;

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
        positionX > Xmax ||
        positionX === Xmin ||
        positionY > Ymax ||
        positionY === Ymin
    ) {
        reverse = !reverse;
    }
}

setInterval(moveBall, 100);