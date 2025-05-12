import gsap from "gsap";

export function animateSection(section) {
    const title = section.querySelector(".section-title-text");
    const headings = section.querySelectorAll(".section-heading");
    const texts = section.querySelectorAll(".section-text");

    gsap.fromTo(title, 
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: "power3.out"
        }
    );

    headings.forEach((heading, index) => {
        gsap.fromTo(heading,
            { opacity: 0, x: -50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.8,
                delay: 0.2 + (index * 0.1),
                ease: "power3.out"
            }
        );
    });

    texts.forEach((text, index) => {
        gsap.fromTo(text,
            { opacity: 0, y: 30 },
            { 
                opacity: 0.9, 
                y: 0, 
                duration: 0.8,
                delay: 0.3 + (index * 0.1),
                ease: "power3.out"
            }
        );
    });
}

export function animateHero() {
    const title = document.querySelector(".hero-main-title");
    const description = document.querySelector(".hero-main-description");
    const secondHeadings = document.querySelectorAll(".hero-second-subheading");

    gsap.fromTo(title,
        { opacity: 0, y: 100 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 1.2,
            ease: "power3.out"
        }
    );

    gsap.fromTo(description,
        { opacity: 0, y: 50 },
        { 
            opacity: 0.9, 
            y: 0, 
            duration: 1,
            delay: 0.3,
            ease: "power3.out"
        }
    );

    secondHeadings.forEach((heading, index) => {
        gsap.fromTo(heading,
            { opacity: 0, x: 50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1,
                delay: 0.5 + (index * 0.2),
                ease: "power3.out"
            }
        );
    });
}

export function initScrollAnimations() {
    const sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        gsap.fromTo(section,
            { 
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top center+=100",
                    end: "bottom center",
                }
            }
        );
    });
}
