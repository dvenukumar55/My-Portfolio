
// 🌐 Responsive Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 💻 Typewriter Effect
const words = ["Web Developer", "Programmer", "Designer"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetween = 1500;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (charIndex < words[wordIndex].length) {
    typewriter.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(eraseEffect, delayBetween);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriter.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) typeEffect();
});
