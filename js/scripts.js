document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        setTimeout(function() {
            responseMessage.style.display = "block";

            contactForm.reset();

            setTimeout(function() {
                responseMessage.style.display = "none";
            }, 3000);
        }, 500);
    });
});
