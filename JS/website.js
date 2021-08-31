var slideIndex = 1;
showSlides(slideIndex);

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    // SETTING ALL IMAGES DISPLAY TO NONE
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // SETTING ALL IMAGES DISPLAY FROM ACTIVE TO NULL
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    // SETTING ONE IMAGE TO DISPLAY
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // MAKING THE RIGHT SENTENCE DISPLAY FOR THE RIGHT PHOTO
    if ((slideIndex-1) == 0) {
        captionText.innerHTML = "I will be happy to assist you with your project!";
    }
    else if ((slideIndex-1) == 1) {
        captionText.innerHTML = "I am trained in C#, .NET Framework, ASP.NET, MVC,";
    }
    else if ((slideIndex-1) == 2) {
        captionText.innerHTML = "HTML, CSS and JavaScript,";
    }
    else if ((slideIndex-1) == 3) {
        captionText.innerHTML = "back end development, databases and SQL.";
    }
    else if ((slideIndex-1) == 4) {
        captionText.innerHTML = "Please contact me today!";
    }
    else {
        captionText.innerHTML = "Hi";
    }
}