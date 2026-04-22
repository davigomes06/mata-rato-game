let score = 0;
let timeLeft = 30;
let gameActive = false;
let timerId = null;
let spawnId = null;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const board = document.getElementById("board");
const btn = document.getElementById("start-btn");
const music = document.getElementById("bg-music");

function spawnRato() {
    if (!gameActive) return;

    const rato = document.createElement("div");
    rato.classList.add("rato");
    rato.innerText = "🐀"; 

    const maxX = board.clientWidth - 80;
    const maxY = board.clientHeight - 80;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    rato.style.left = `${x}px`;
    rato.style.top = `${y}px`;

    rato.onclick = (e) => {
        e.stopPropagation();
        if (!gameActive) return;

        score++;
        scoreEl.innerText = score;

        // Efeito visual de abate: Vermelho rápido e gira
        rato.style.filter = "sepia(1) saturate(10000%) hue-rotate(-50deg)";
        rato.style.transform = "scale(1.5) rotate(90deg)";
        rato.style.opacity = "0";

        setTimeout(() => {
            if (rato.parentElement) rato.remove();
        }, 150);
    };

    board.appendChild(rato);

    setTimeout(() => {
        if (rato.parentElement && gameActive) {
            rato.style.opacity = "0";
            setTimeout(() => { if (rato.parentElement) rato.remove(); }, 100);
        }
    }, 850);
}

function startGame() {
    score = 0;
    timeLeft = 30;
    gameActive = true;
    board.innerHTML = "";
    scoreEl.innerText = score;
    timeEl.innerText = timeLeft;
    btn.style.visibility = "hidden";

    music.volume = 0.4;
    music.play().catch(() => console.log("Interaja com a página primeiro."));

    timerId = setInterval(() => {
        timeLeft--;
        timeEl.innerText = timeLeft;
        if (timeLeft <= 0) endGame();
    }, 1000);

    spawnId = setInterval(spawnRato, 550);
}

function endGame() {
    gameActive = false;
    clearInterval(timerId);
    clearInterval(spawnId);
    music.pause();
    music.currentTime = 0;
    alert("LIMPEZA CONCLUÍDA! Ratos abatidos: " + score);
    btn.style.visibility = "visible";
    btn.innerText = "RECOMEÇAR CAÇA";
}

btn.addEventListener("click", startGame);