// Navigation
function showPortfolio() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('portfolio').classList.remove('hidden');
    
    // Trigger scroll animations
    setTimeout(() => {
        observeElements();
        animateProgressBars();
    }, 100);
}

function showLanding() {
    document.getElementById('portfolio').classList.add('hidden');
    document.getElementById('landing').classList.remove('hidden');
    
    // Reset animations
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => el.classList.remove('visible'));
    
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        bar.classList.remove('animate');
        bar.style.width = '0';
    });
}

// Contact Popup
let popupOpen = false;

function toggleContact(event) {
    event.stopPropagation();
    const popup = document.getElementById('contactPopup');
    popupOpen = !popupOpen;
    
    if (popupOpen) {
        popup.classList.remove('hidden');
    } else {
        popup.classList.add('hidden');
    }
}

function copyEmail(event) {
    event.stopPropagation();
    const email = 'ahsanmohammed3343@gmail.com';
    
    // Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
            showToast('Email copied to clipboard!');
        }).catch(() => {
            fallbackCopy(email);
        });
    } else {
        fallbackCopy(email);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Email copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy email');
    }
    
    document.body.removeChild(textArea);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('contactPopup');
    const btn = document.querySelector('.contact-btn');
    
    if (popupOpen && !popup.contains(event.target) && event.target !== btn) {
        popup.classList.add('hidden');
        popupOpen = false;
    }
});

// Prevent popup from closing when clicking inside it
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('contactPopup');
    if (popup) {
        popup.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});

// Scroll Animations
function observeElements() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// Progress Bar Animations
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.setProperty('--progress-width', progress + '%');
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Particles Animation
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];
let animationId;

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
        ctx.fill();
    }
}

function initParticles() {
    if (!canvas) return;
    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    if (!canvas || !ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Draw connections
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });
    
    animationId = requestAnimationFrame(animateParticles);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize on load
window.addEventListener('load', function() {
    if (canvas) {
        resizeCanvas();
        initParticles();
        animateParticles();
    }
});

window.addEventListener('resize', function() {
    if (canvas) {
        resizeCanvas();
        initParticles();
    }
});

// Cleanup on navigation
window.addEventListener('beforeunload', function() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
});