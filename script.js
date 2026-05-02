let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}


//Forms validate
function validateForm() {
    let fname = document.forms["trainingForm"]["fname"].value.trim();
    let lname = document.forms["trainingForm"]["lname"].value.trim();
    let email = document.forms["trainingForm"]["email"].value.trim();
    let dogname = document.forms["trainingForm"]["dogname"].value.trim();
    let message = document.forms["trainingForm"]["message"].value.trim();

    let trainingLevel = document.querySelector('input[name="training_level"]:checked');

    let interests = document.querySelectorAll(
        'input[name="interest_basic"]:checked, input[name="interest_tracking"]:checked, input[name="interest_protection"]:checked, input[name="interest_puppy"]:checked'
    );


    if (fname == "") {
        alert("First name must be filled out");
        return false;
    }

    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (dogname == "") {
        alert("Dogs name must be filled out");
        return false;
    }


    if (!trainingLevel) {
        alert("Please choose a training level.");
        return false;
    }

    if (interests.length === 0) {
        alert("Please choose at least one interest.");
        return false;
    }

    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;

}