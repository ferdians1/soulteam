const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


// MOBILE MENU

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


// CLOSE MOBILE MENU WHEN LINK CLICKED

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


// REVEAL ANIMATION

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(
        ".about-text, .stat, .skill-card, .project-card, .contact-content"
    )
    .forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });