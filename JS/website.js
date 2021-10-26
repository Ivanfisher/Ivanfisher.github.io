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
        captionText.innerHTML = "I have experience in C#, .NET Framework, ASP.NET, MVC,";
    }
    else if ((slideIndex-1) == 1) {
        captionText.innerHTML = "HTML, CSS and JavaScript,";
    }
    else if ((slideIndex-1) == 2) {
        captionText.innerHTML = "back end development, databases and SQL.";
    }
    else if ((slideIndex-1) == 3) {
        captionText.innerHTML = "Please contact me today!";
    }
    else {
        captionText.innerHTML = "Hi";
    }
}

var form = document.getElementById("myForm");
// This function specifies what to do once form is submitted
async function handleSubmit(event) {
    // This function prevents default action of redirecting page
    event.preventDefault();
    var status = document.getElementById("myFormStatus");
    var data = new FormData(event.target);
    // Determining if submission was successful then choosing action based on result
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    // Setting button display to none and then display myFormStatus instead
    document.getElementById("button").style.display = "none";
    document.getElementById("myFormStatus").style.display = "block";
    form.reset()
    }).catch(error => {
    // Setting button display to none and then display myFormStatus instead
    document.getElementById("button").style.display = "none";
    document.getElementById("myFormStatus").style.display = "block";
    status.innerHTML = "Oops! There was a problem submitting your form.."
    });
}
form.addEventListener("submit", handleSubmit)