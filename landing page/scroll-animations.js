document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
    const items = document.querySelectorAll(".reveal-item");

    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px"
    };


    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 120);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(el => revealObserver.observe(el));
    items.forEach(el => itemObserver.observe(el));

    // 🔐 FAILSAFE: never allow content to stay hidden
    setTimeout(() => {
        reveals.forEach(el => el.classList.add("active"));
        items.forEach(el => el.classList.add("active"));
    }, 3000);
});
