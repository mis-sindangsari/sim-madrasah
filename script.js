document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-links");

    // Efek shadow pada header saat di-scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            header.style.height = "70px";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            header.style.height = "80px";
        }

        // Active link saat di scroll (Spy Scroll)
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Mobile Menu Toggle (Sederhana)
    mobileMenuBtn.addEventListener("click", () => {
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
            navMenu.style.flexDirection = "column";
            navMenu.style.position = "absolute";
            navMenu.style.top = "80px";
            navMenu.style.left = "0";
            navMenu.style.width = "100%";
            navMenu.style.backgroundColor = "#FFFFFF";
            navMenu.style.padding = "20px";
            navMenu.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
        }
    });
});
