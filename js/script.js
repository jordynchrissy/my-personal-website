
// =========================================
// DARK MODE / LIGHT MODE TOGGLE
// =========================================

// Get the theme toggle button
const themeToggle = document.getElementById("themeToggle");

// Listen for clicks on the button
themeToggle.addEventListener("click", function () {

    // Toggle the dark-mode class on the body
    document.body.classList.toggle("dark-mode");

    // Check which theme is currently active
    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "𖤓˚࿔ light mode";

    } else {

        themeToggle.textContent = "⏾⋆. dark mode";

    }

});


// =========================================
// PORTFOLIO IMAGE SLIDESHOW
// =========================================

const slideImages = [
    {
        src: "images/businesscard.png",
        alt: "My graphic design business card"
    },
    {
        src: "images/businesscard2.png",
        alt: "My second graphic design project"
    }
];

const slideshowImage = document.getElementById("slideshowImage");
const previousSlide = document.getElementById("previousSlide");
const nextSlide = document.getElementById("nextSlide");
const slideCounter = document.getElementById("slideCounter");

let currentSlide = 0;

// Display the selected image with a sliding animation
function showSlide(index) {

    slideshowImage.classList.remove("slide-in");
    slideshowImage.classList.add("slide-out");

    setTimeout(function () {

        slideshowImage.src = slideImages[index].src;
        slideshowImage.alt = slideImages[index].alt;

        slideCounter.textContent =
            (index + 1) + " / " + slideImages.length;

        slideshowImage.classList.remove("slide-out");
        slideshowImage.classList.add("slide-in");

    }, 250);
}

// Next image
nextSlide.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= slideImages.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

// Automatically change the image every 4 seconds
setInterval(function () {

    currentSlide++;

    if (currentSlide >= slideImages.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);
