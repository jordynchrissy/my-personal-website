
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

// =========================================
// DIGITAL CLOCK
// =========================================

// Get the clock element
const digitalClock = document.getElementById("digitalClock");

// Function to display the current time
function updateClock() {

    // Get the current date and time
    const currentTime = new Date();

    // Format the time
    const time = currentTime.toLocaleTimeString();

    // Format the date
    const date = currentTime.toLocaleDateString();

    // Display the date and time
    digitalClock.textContent = date + " | " + time;

}

// Update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// =========================================
// RANDOM WELCOME GREETING
// =========================================

// Store the quotes in an array
const quotes = [
    "You are capable of wonderful things.",
    "Small steps still move you forward.",
    "Create a life that feels like you.",
    "Your ideas deserve to be seen.",
    "Progress is still progress, no matter how small.",
    "Give yourself time to grow.",
    "You don't have to have everything figured out.",
    "Make room for the things that make you happy.",
    "Believe in the magic of new beginnings.",
    "Keep creating, keep dreaming, keep growing."
];

// Get the HTML elements
const welcomePopup = document.getElementById("welcomePopup");
const quoteText = document.getElementById("quoteText");
const newQuoteButton = document.getElementById("newQuote");
const closeWelcomeButton = document.getElementById("closeWelcome");

// Select a random quote
function generateQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomIndex];

}

// Display a random quote when the website opens
generateQuote();

// Generate another quote when clicked
newQuoteButton.addEventListener("click", generateQuote);

// Close the welcome popup
closeWelcomeButton.addEventListener("click", function () {

    welcomePopup.style.display = "none";

});