// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent!');
            form.reset();
        });
    }
});
