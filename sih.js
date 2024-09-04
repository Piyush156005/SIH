var icon = document.getElementById("icon");

icon.onclick = function() {
    // Add the rotation class to start the fade-out effect
    icon.classList.add("rotate");
    
    // Change the icon image after the fade-out effect starts
    setTimeout(function() {
        // Toggle dark_theme class
        document.body.classList.toggle("dark_theme");

        // Change the icon source based on the theme
        if (document.body.classList.contains("dark_theme")) {
            icon.src = "img/sun.png";  // Switch to sun icon
        } else {
            icon.src = "img/moon.png";  // Switch to moon icon
        }

        // Reset the rotation and fade-in effect
        icon.classList.remove("rotate");

        // Trigger a reflow to apply the fade-in effect immediately
        void icon.offsetWidth;
    }, 250);  // Short delay to match the fade-out transition
};
