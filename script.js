const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

const scoreElement = document.getElementById("score");
const bestElement = document.getElementById("best");

const gameOverScreen = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");

let gameRunning = false;
let gamePaused = false;

let score = 0;
let bestScore = 0;

let obstaclePosition = 100;
let speed = 2;

let lastTime = 0;
let animationId;


// PULAR
function jump() {

    if (!gameRunning || gamePaused) {
        return;
    }

    if (!player.classList.contains("jump")) {

        player.classList.add("jump");

        set





