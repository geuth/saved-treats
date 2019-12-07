var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function minusSlides(n) {
    showSlides(slideIndex -= n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow1");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000);
}


var modal = document.getElementById('itemwrapper');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper1');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}


var modal = document.getElementById('itemwrapper2');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper3');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper4');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper5');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
 
