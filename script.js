// Simple JavaScript example:
// Show an alert when someone clicks "Email Me"

document.addEventListener("DOMContentLoaded", () => {
    const emailBtn = document.querySelector('a[href^="mailto:"]');

    if (emailBtn) {
        emailBtn.addEventListener("click", () => {
            alert("Thanks for reaching out! I’ll get back to you soon.");
        });
    }
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));