function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // First interaction pe fixed kar do
    noBtn.style.position = 'fixed';

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Screen ke safe corners
    const maxX = width - 150;
    const maxY = height - 100;

    let randomX, randomY;

    // Is loop se button YES ke paas kabhi nahi aayega
    do {
        randomX = Math.floor(Math.random() * (maxX - 50)) + 50;
        randomY = Math.floor(Math.random() * (maxY - 50)) + 50;
    } while (
        // Agar random point screen ke center (Yes button area) mein ho
        randomX > width/2 - 130 && randomX < width/2 + 130 &&
        randomY > height/2 - 150 && randomY < height/2 + 150
    );

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function celebrate() {
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music play error"));

    document.getElementById('bodyTag').classList.add('celebrate-bg');
    document.getElementById('content-to-hide').style.display = 'none';
    document.getElementById('mainTitle').style.display = 'none';
    
    document.getElementById('success-msg').classList.remove('hidden');

    // GIF change for celebration
    document.getElementById('displayImg').src = "https://media.giphy.com/media/c76IJLufpNwSULPk77/giphy.gif";

    for(let i=0; i<150; i++) {
        setTimeout(createHeart, i * 40);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const hearts = ['❤️', '💖', '💗', '✨'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 25 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);
