const shopZoneThemeKey = "shopzone-theme";
const themeButtons = document.querySelectorAll("#themeBtn, .site-theme-toggle");
const menuToggles = document.querySelectorAll("[data-menu-toggle]");

function applyShopZoneTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);
  document.body.dataset.theme = isLight ? "light" : "dark";

  themeButtons.forEach((button) => {
    const label = isLight ? "Switch to dark theme" : "Switch to light theme";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.setAttribute("aria-pressed", String(isLight));

    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-sun", isLight);
      icon.classList.toggle("fa-moon", !isLight);
    }
  });
}

applyShopZoneTheme(localStorage.getItem(shopZoneThemeKey) === "light" ? "light" : "dark");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    applyShopZoneTheme(nextTheme);
    localStorage.setItem(shopZoneThemeKey, nextTheme);
  });
});

menuToggles.forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));
  if (!menu) return;

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    menu.classList.toggle("is-open", !isExpanded);
    menu.classList.toggle("open", !isExpanded);

    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars", isExpanded);
      icon.classList.toggle("fa-xmark", !isExpanded);
    }
  });
});
