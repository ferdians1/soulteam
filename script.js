const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");


// ============================================
// MOBILE MENU
// ============================================

menuButton.addEventListener("click", () => {

    const isOpen =
        mobileNav.style.display === "flex";

    mobileNav.style.display =
        isOpen ? "none" : "flex";

});


// CLOSE MENU WHEN LINK IS CLICKED

const mobileLinks =
    document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.style.display = "none";

    });

});


// ============================================
// SCROLL REVEAL
// ============================================

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-grid, .skill-card, .project-card, .contact-box"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal"
    );

    revealObserver.observe(
        element
    );

});


// ============================================
// NAVBAR ACTIVE LINK
// ============================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);