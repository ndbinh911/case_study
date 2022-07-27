class gameBoard {
    constructor(width, heigh) {
        this.width = width;
        this.heigh = heigh;
    }
}

class Ball {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }

    drawBall() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    checkCollide(bar, interval) {
        if ((this.x - this.radius < 0) || (this.x + this.dx + this.radius > canvas.width)) {
            this.dx = -this.dx;
        }
        if (checkCollision(this, bar) || (this.y - this.radius < 0)) {
            this.dy = -this.dy;
        }
        if ((this.y + this.dy + this.radius == canvas.height)) {
            alert('Game over');
            clearInterval(interval);
        }
        
        this.x += this.dx;
        this.y += this.dy;
    }
}

class Bar {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawBar() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

    moveBar() {
        let moveBy = 7;
        let seft  = this;

        window.addEventListener('keyup', function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                case 'Left':
                    seft.clear();
                    if (seft.x > 0) {
                        seft.x -= moveBy;
                        console.log(seft.x, 'left')
                        console.log(seft.width, 'left')
                    }
                    seft.drawBar();
                    break;
                case 'ArrowRight':
                case 'Right':
                    seft.clear();
                    if (seft.x + seft.width < canvas.width) {
                        seft.x += moveBy;
                        console.log(seft.x, 'right')
                        console.log(seft.width, 'right')
                    }
                    seft.drawBar();
                    break;
            }
        })

        window.addEventListener('keydown', function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                case 'Left':
                    seft.clear();
                    if (seft.x > 0) {
                        seft.x -= moveBy;
                    }
                    seft.drawBar();
                    break;
                case 'ArrowRight':
                case 'Right':
                    seft.clear();
                    if (seft.x + seft.width < canvas.width) {
                        seft.x += moveBy;
                    }
                    seft.drawBar();
                    break;
            }
        })
    }

    clear() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}


function checkCollision(cir, rect) {
    let Ax = cir.x;
    let Ay = cir.y;

    let rect_left = rect.x;
    let rect_top = rect.y;
    let rect_right = rect.x + rect.width;
    let rect_bottom = rect.y + rect.heigh;

    if (cir.x < rect_left)
        Ax = rect_left;
    else 
    if (cir.x > rect_right)
        Ax = rect_right;

    if (cir.y < rect_top)
        Ay = rect_top;
    // else 
    // if (cir.y > rect_bottom)
    //     Ay = rect_bottom;

    let dx = cir.x - Ax;
    let dy = cir.y - Ay;

    return (dx * dx + dy * dy) <= cir.radius * cir.radius;
}

// Score
let i = 0;
function score() {
    let point = document.getElementById('point');
    i += 1;
    point.innerHTML = i + ' point'
}

let bar = new Bar(215, 425, 70, 10)
let ball = new Ball(20, 100, 7, 1, 1);

ball.drawBall();
bar.drawBar();
bar.moveBar();

function draw() {
    score()
    bar.clear();
    ball.drawBall();
    bar.drawBar();
    ball.checkCollide(bar, myInterval);
}

let myInterval = setInterval(draw, 0);

function play() {
    location.reload();
}



































// class gameBoard {
//     constructor(width, heigh) {
//         this.width = width;
//         this.heigh = heigh;
//     }
// }

// class Ball {
//     constructor(x, y, radius, dx, dy, speed) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.dx = dx;
//         this.dy = dy;
//         this.speed = speed;
//     }

//     drawBall() {
//         let canvas = document.getElementById("canvas");
//         let ctx = canvas.getContext("2d");
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "#0095DD";
//         ctx.fill();
//         ctx.closePath();
//     }
// }

// class Bar {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.heigh = height;
//     }

//     drawBar() {
//         let canvas = document.getElementById("canvas");
//         let ctx = canvas.getContext("2d");
//         ctx.beginPath();
//         ctx.rect(this.x, this.y, this.width, this.heigh);
//         ctx.fillStyle = 'blue';
//         ctx.fill();
//         ctx.closePath();
//     }

//     clear() {
//         let canvas = document.getElementById("canvas");
//         let ctx = canvas.getContext("2d");
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }
// }


// let bar = new Bar(215, 425, 70, 10)
// let ball = new Ball(20, 100, 7, 0, 10);

// // Move bar
// let moveBy = 7;

// window.addEventListener('keyup', function (e) {
//     switch (e.key) {
//         case 'ArrowLeft':
//         case 'Left':
//             bar.clear();
//             if (bar.x > 0) {
//                 bar.x -= moveBy;
//                 console.log(bar.x, 'left')
//                 console.log(bar.width, 'left')
//             }
//             bar.drawBar();
//             break;
//         case 'ArrowRight':
//         case 'Right':
//             bar.clear();
//             if (bar.x + bar.width < canvas.width) {
//                 bar.x += moveBy;
//                 console.log(bar.x, 'right')
//                 console.log(bar.width, 'right')
//             }
//             bar.drawBar();
//             break;
//     }
// })

// window.addEventListener('keydown', function (e) {
//     switch (e.key) {
//         case 'ArrowLeft':
//         case 'Left':
//             bar.clear();
//             if (bar.x > 0) {
//                 bar.x -= moveBy;
//             }
//             bar.drawBar();
//             break;
//         case 'ArrowRight':
//         case 'Right':
//             bar.clear();
//             if (bar.x + bar.width < canvas.width) {
//                 bar.x += moveBy;
//             }
//             bar.drawBar();
//             break;
//     }
// })

// function checkCollision(cir, rect) {
//     let Ax = cir.x;
//     let Ay = cir.y;

//     let rect_left = rect.x;
//     let rect_top = rect.y;
//     let rect_right = rect.x + rect.width;
//     let rect_bottom = rect.y + rect.heigh;

//     if (cir.x < rect_left)
//         Ax = rect_left;
//     else 
//     if (cir.x > rect_right)
//         Ax = rect_right;

//     if (cir.y < rect_top)
//         Ay = rect_top;
//     else 
//     if (cir.y > rect_bottom)
//         Ay = rect_bottom;

//     let dx = cir.x - Ax;
//     let dy = cir.y - Ay;

//     return (dx * dx + dy * dy) <= cir.radius * cir.radius;
// }




// // let x = 20;
// // let y = 100;
// // let radius = 10;


// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let dx = 1;
// let dy = 1;

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ball.drawBall();
//     bar.drawBar();
//     if ((ball.x - ball.radius < 0) || (ball.x + dx + ball.radius > canvas.width)) {
//         dx = -dx;
//     }
//     if (checkCollision(ball, bar) || (ball.y - ball.radius < 0)) {
//         dy = -dy;
//     }
//     if ((ball.y + dy + ball.radius == canvas.height)) {
//         alert('Game over');
//     }
    
//     ball.x += dx;
//     ball.y += dy;
// }
// setInterval(draw, ball.speed);