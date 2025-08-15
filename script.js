
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Typewriter effect
const typewriter = document.getElementById('typewriter');
const words = ['Web Developer', 'Programmer', 'Student', 'Tech Enthusiast'];
let wordIndex = 0, charIndex = 0, removing = false;

function type() {
  let currentWord = words[wordIndex];
  if (!removing) {
    typewriter.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      setTimeout(() => removing = true, 800);
    }
  } else {
    typewriter.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      removing = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, removing ? 80 : 120);
}
type();

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('slide-up');
  });
},{ threshold: 0.2 });

projectCards.forEach(card => observer.observe(card));