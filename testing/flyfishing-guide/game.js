const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const castBtn = document.getElementById('cast-btn');
const message = document.getElementById('game-message');

let fish = null;
let isCasting = false;

function drawRiver() {
    ctx.fillStyle = '#90caf9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#388e3c';
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
}

function drawFish(x, y) {
    ctx.beginPath();
    ctx.ellipse(x, y, 18, 8, 0, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffb300';
    ctx.fill();
    ctx.strokeStyle = '#6d4c41';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x - 14, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - 14, y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = '#263238';
    ctx.fill();
}

function randomFish() {
    return {
        x: 60 + Math.random() * 380,
        y: 80 + Math.random() * 120
    };
}

function castLine() {
    isCasting = true;
    message.textContent = 'Casting...';
    drawRiver();
    if (Math.random() < 0.6) {
        fish = randomFish();
        setTimeout(() => {
            drawRiver();
            drawFish(fish.x, fish.y);
            message.textContent = 'A fish appeared! Click Cast to try to catch it!';
            isCasting = false;
        }, 900);
    } else {
        setTimeout(() => {
            drawRiver();
            message.textContent = 'No fish this time. Try again!';
            isCasting = false;
        }, 900);
    }
}

castBtn.addEventListener('click', () => {
    if (isCasting) return;
    if (fish) {
        // Try to catch
        if (Math.random() < 0.5) {
            message.textContent = 'You caught the fish! 🎣';
            drawRiver();
            drawFish(fish.x, fish.y);
            fish = null;
        } else {
            message.textContent = 'The fish got away!';
            drawRiver();
            fish = null;
        }
    } else {
        castLine();
    }
});

drawRiver();
message.textContent = 'Click Cast to start!';
