script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the page from refreshing

        // Show thank you message
        alert("Thank you for your message! We'll get back to you soon.");

        // Optionally, clear the form fields
        form.reset();
    });
});
