
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
