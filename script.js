// Custom Cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hide default cursor
document.body.style.cursor = 'none';

// Audio Player Controls
const playBtn = document.querySelector('.control-btn');
const progressFill = document.querySelector('.progress-fill');
const currentTimeEl = document.querySelector('.current-time');
const audio = new Audio('https://r2.guns.lol/0167ceb1-7b3c-4c7d-87ff-158adccc9e1b.mp3');
let isPlaying = false;

// Audio controls
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    isPlaying = !isPlaying;
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = progress + '%';
    
    // Update time display
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Badge hover effects with tooltips
document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Parallax effect for profile card
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.transform = `perspective(1000px) rotateX(${mouseY * 2}deg) rotateY(${mouseX * 2}deg) scale3d(1, 1, 1)`;
    }
});

// Add ripple effect on click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add ripple styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .ripple-effect {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
        z-index: 9998;
    }
    
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Smooth animations on load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Add hover sound effect (optional)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

function playHoverSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Add hover sound to interactive elements
document.querySelectorAll('.social-link, .badge, .control-btn').forEach(element => {
    element.addEventListener('mouseenter', playHoverSound);
});
