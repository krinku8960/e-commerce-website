document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("navToggle");
    const navigation = document.getElementById("primaryNavigation");
    const themeButton = document.getElementById("themeBtn");
    const root = document.documentElement;

    // Responsive navigation menu
    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("is-open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuButton.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Dark and light theme
    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);

        if (themeButton) {
            const isLight = theme === "light";
            themeButton.innerHTML = isLight
                ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';

            themeButton.setAttribute(
                "aria-label",
                isLight ? "Switch to dark theme" : "Switch to light theme"
            );
            themeButton.setAttribute(
                "title",
                isLight ? "Switch to dark theme" : "Switch to light theme"
            );
            themeButton.setAttribute("aria-pressed", String(isLight));
        }
    }

    let savedTheme = "dark";

    try {
        savedTheme = localStorage.getItem("shopzone-theme") || "dark";
    } catch (error) {
        // Continue if browser storage is unavailable.
    }

    applyTheme(savedTheme);

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            const nextTheme =
                root.getAttribute("data-theme") === "dark" ? "light" : "dark";

            applyTheme(nextTheme);

            try {
                localStorage.setItem("shopzone-theme", nextTheme);
            } catch (error) {
                // Theme still works for the current page.
            }
        });
    }
});
