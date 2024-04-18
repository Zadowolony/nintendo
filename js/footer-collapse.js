document.addEventListener("DOMContentLoaded", function () {
    // Hide all collapse elements on page load
    document.querySelectorAll('.collapse').forEach(function (collapse) {
        new bootstrap.Collapse(collapse, { hide: true });
    });

    let tabHeader = document.querySelector(".tab-header");
    let tabIndicator = document.querySelector(".tab-indicator");
    let tabBody = document.querySelector(".tab-body");
    let tabsPane = tabHeader.querySelectorAll("div");

    for (let i = 0; i < tabsPane.length; i++) {
        tabsPane[i].addEventListener("click", function () {
            // Remove active class from the header tabs
            tabHeader.querySelector(".active").classList.remove("active");
            tabsPane[i].classList.add("active");

            // Remove active class from the tab body content
            tabBody.querySelector(".active").classList.remove("active");

            // Add active class to the corresponding tab body content
            let contentElement = tabBody.children[i];
            contentElement.classList.add("active");

            // Set the tab indicator position
            tabIndicator.style.left = `calc((100% / 4) * ${i})`;
        });
    }

    // Get references to your buttons and collapse elements
    let productButton = document.getElementById('productButton');
    let productCollapse = new bootstrap.Collapse(document.getElementById('productCollapse'));

    let franchiseButton = document.getElementById('franchiseButton');
    let franchiseCollapse = new bootstrap.Collapse(document.getElementById('franchiseCollapse'));

    let ondersteuningButton = document.getElementById('ondersteuningButton');
    let ondersteuningCollapse = new bootstrap.Collapse(document.getElementById('ondersteuningCollapse'));

    let overButton = document.getElementById('overButton');
    let overCollapse = new bootstrap.Collapse(document.getElementById('overCollapse'));

    // Add click event listeners to your buttons
    productButton.addEventListener('click', function () {
        // Toggle the corresponding collapse
        productCollapse.toggle();
    });

    franchiseButton.addEventListener('click', function () {
        // Toggle the corresponding collapse
        franchiseCollapse.toggle();
    });

    ondersteuningButton.addEventListener('click', function () {
        // Toggle the corresponding collapse
        ondersteuningCollapse.toggle();
    });

    overButton.addEventListener('click', function () {
        // Toggle the corresponding collapse
        overCollapse.toggle();
    });
});