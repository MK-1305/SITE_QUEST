document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");
    let activeAccordion = null;

    accordions.forEach(function (accordion) {
        const accordionMenu = accordion.querySelector(".accordion-menu");

        accordionMenu.addEventListener("click", function () {
            if (activeAccordion && activeAccordion !== accordion) {
                activeAccordion.classList.remove("active");
            }

            accordion.classList.toggle("active");
            activeAccordion = accordion.classList.contains("active") ? accordion : null;
        });
    });
});
