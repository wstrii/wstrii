// Custom Cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Audio Player Controls
const playBtn = document.querySelector('.control-btn');
const audio = new Audio('assets/background-music.mp3');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Add hover effects to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Badge hover effects
document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity for fade-in effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.background-video');
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add click sound effect (optional)
document.addEventListener('click', (e) => {
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add ripple effect styles dynamically
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
