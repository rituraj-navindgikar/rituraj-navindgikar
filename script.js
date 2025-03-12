document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Intersection Observer for fade-in animations
    const sections = document.querySelectorAll(".fade-in, .profile-card, .project-card, .experience, .about, .contact-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hover Effect on Project Cards
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 10px 25px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
        });
    });

    const gallery = document.querySelector(".gallery");
    const galleryItems = Array.from(gallery.children);

    // Duplicate items for infinite scrolling effect
    galleryItems.forEach(item => {
        const clone = item.cloneNode(true);
        gallery.appendChild(clone);
    });
    
    const heroSubtitle = document.querySelector(".hero-subtitle");

    // Animated Text Effect
    let textArray = [
        "A showcase of my passion for Robotics.",
        "A journey through AI and Engineering.",
        "Building the future, one project at a time."
    ];
    let textIndex = 0;

    function changeText() {
        heroSubtitle.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length;
    }

    setInterval(changeText, 3000);

});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            item.classList.toggle("active");

            // Toggle the max-height of the answer for smooth animation
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0px";
            }
        });
    });
});
