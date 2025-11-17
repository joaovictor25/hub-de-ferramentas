document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("navMenu");
    const toggleBtn = document.getElementById("menuToggle");

    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        toggleBtn.classList.toggle("active");
    });
});
