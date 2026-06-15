const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
});

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
    }else{
        nav.style.boxShadow = "none";
    }
});
