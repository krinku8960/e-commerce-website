 const homeButton = document.getElementById("homeBtn");
        const pageTransition = document.getElementById("pageTransition");

        homeButton.addEventListener("click", (event) => {
            if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
                return;
            }

            event.preventDefault();
            pageTransition.addEventListener("animationend", () => {
                window.location.assign(homeButton.href);
            }, { once: true });
            pageTransition.classList.add("is-active");
        });
// --------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll(".category-item[data-category]");
    const productPanels = document.querySelectorAll("[data-product-panel]");

    function showCategory(categoryId, updateHash) {
        const selectedPanel = document.getElementById(categoryId);
        if (!selectedPanel || !selectedPanel.hasAttribute("data-product-panel")) return;

        productPanels.forEach(function (panel) {
            panel.hidden = panel !== selectedPanel;
        });

        categoryLinks.forEach(function (link) {
            const isActive = link.dataset.category === categoryId;
            link.classList.toggle("active", isActive);
            if (isActive) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });

        if (updateHash) history.replaceState(null, "", "#" + categoryId);
    }

    categoryLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const categoryId = this.dataset.category;
            if (!categoryId) return;
            event.preventDefault();
            showCategory(categoryId, true);
        });
    });

    const requestedCategory = window.location.hash.slice(1);
    if (requestedCategory === "headphone-products" ||requestedCategory === "laptop-products" || requestedCategory === "mobile-products") {
        showCategory(requestedCategory, false);
    } else {
        showCategory("mobile-products", false);
    }
});
