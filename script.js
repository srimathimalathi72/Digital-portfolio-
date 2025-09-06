// Scroll to About section when Learn More button is clicked

document.getElementById("learnMoreBtn").addEventListener("click", function() {

    document.getElementById("about").scrollIntoView({ behavior: "smooth" });

});

// Contact form submission

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent = "Thank you! Your message has been sent.";

    formMessage.style.color = "green";

    // Clear form fields

    this.reset();

});