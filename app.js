let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// Custom cursor with confetti trail
const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c', '#024133'];

const mainCursor = document.createElement('div');
mainCursor.className = 'cursor-main';
document.body.appendChild(mainCursor);

document.addEventListener('mousemove', (e) => {
  // Move persistent cursor circle
  mainCursor.style.left = e.clientX + 'px';
  mainCursor.style.top = e.clientY + 'px';

  // Create confetti trails
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'cursor-confetti';
      confetti.style.left = (e.pageX + (Math.random() - 0.5) * 20) + 'px';
      confetti.style.top = (e.pageY + (Math.random() - 0.5) * 20) + 'px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 600);
    }, i * 50);
  }

});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));
