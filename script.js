console.log("Shan Tech Hub Website Loaded Successfully");
// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};
// ================= HOME HERO SLIDESHOW =================

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");
const prevBtn = document.querySelector(".hero-prev");
const nextBtn = document.querySelector(".hero-next");

let currentSlide = 0;
let slideTimer;


// Show selected slide
function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


// Next slide
function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
}


// Previous slide
function previousSlide() {

    let previous = currentSlide - 1;

    if (previous < 0) {
        previous = slides.length - 1;
    }

    showSlide(previous);
}


// Automatic slideshow
function startSlideshow() {

    slideTimer = setInterval(function () {

        nextSlide();

    }, 3000); // 3 seconds


}


// Restart timer
function restartSlideshow() {

    clearInterval(slideTimer);

    startSlideshow();

}


// Next button
if (nextBtn) {

    nextBtn.addEventListener("click", function () {

        nextSlide();
        restartSlideshow();

    });

}


// Previous button
if (prevBtn) {

    prevBtn.addEventListener("click", function () {

        previousSlide();
        restartSlideshow();

    });

}


// Dots
dots.forEach((dot, index) => {

    dot.addEventListener("click", function () {

        showSlide(index);
        restartSlideshow();

    });

});


// Start slideshow
if (slides.length > 0) {

    showSlide(0);
    startSlideshow();

}

// ================= END HOME HERO SLIDESHOW =================