
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    const contactForm = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                responseMessage.textContent = "Please fill out all fields.";
                responseMessage.style.color = "red";
                return;
            }

            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";

            contactForm.reset(); // Clear form fields
        });
    }
});
