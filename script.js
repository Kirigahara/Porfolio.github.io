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