/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
});
document.addEventListener("DOMContentLoaded", function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    fetch('contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-placeholder').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            // Update the year in the footer
            const yearSpan = document.getElementById('current-year');
            const currentYear = new Date().getFullYear();
            yearSpan.textContent = currentYear;
        });


    const tabList = document.querySelector("#pills-tab");
    const container = document.querySelector("#portfolio2 .tab-content");
    if (Array.isArray(tab_datas)) {
        tab_datas.forEach((tab_data, index) => {

            // Create tab buttons
            const tabItem = document.createElement("li");
            tabItem.className = "nav-item";
            tabItem.setAttribute("role", "presentation");

            const tabButton = document.createElement("button");
            tabButton.className = `nav-link ${index === 0 ? "active" : ""}`;
            tabButton.id = `pills-${index}-tab`;
            tabButton.setAttribute("data-bs-toggle", "pill");
            tabButton.setAttribute("data-bs-target", `#pills-${index}`);
            tabButton.setAttribute("type", "button");
            tabButton.setAttribute("role", "tab");
            tabButton.setAttribute("aria-controls", `pills-${index}`);
            tabButton.setAttribute("aria-selected", index === 0 ? "true" : "false");
            tabButton.textContent = tab_data.folder;

            tabItem.appendChild(tabButton);
            tabList.appendChild(tabItem);

            // Create tab content
            const tabPane = document.createElement("div");
            tabPane.className = `tab-pane fade ${index === 0 ? "show active" : ""}`;
            tabPane.id = `pills-${index}`;
            tabPane.setAttribute("role", "tabpanel");
            tabPane.setAttribute("aria-labelledby", `pills-${index}-tab`);

            const rowDiv = document.createElement("div");
            rowDiv.className = "row g-0";

            tab_data.images.forEach(image => {
                const colDiv = document.createElement("div");
                colDiv.className = "col-lg-4 col-sm-6";

                const anchor = document.createElement("a");
                anchor.className = "portfolio-box";
                anchor.href = `/${root_folder}/${tab_data.folder}/${image}`;
                anchor.title = image.split('.')[0];

                const img = document.createElement("img");
                img.className = "img-fluid";
                img.loading = "lazy";
                img.src = `/${root_folder}/${tab_data.folder}/${image}`;
                img.alt = "...";

                const captionDiv = document.createElement("div");
                captionDiv.className = "portfolio-box-caption";

                anchor.appendChild(img);
                anchor.appendChild(captionDiv);
                colDiv.appendChild(anchor);
                rowDiv.appendChild(colDiv);
            });

            tabPane.appendChild(rowDiv);
            container.appendChild(tabPane);
        });
    }
});
