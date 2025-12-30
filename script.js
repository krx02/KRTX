document.addEventListener("DOMContentLoaded", function () {

    const portfolioImages = [
        "assets/portfolio/brownie (1).png",
    "assets/portfolio/burger.png",
    "assets/portfolio/waffle.png"
    ];

    const grid = document.getElementById("portfolioGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    if (!grid) {
        console.error("portfolioGrid not found");
        return;
    }

    portfolioImages.forEach(src => {
        const div = document.createElement("div");
        div.className = "group relative overflow-hidden rounded-xl cursor-pointer";

        div.innerHTML = `
            <img src="${src}"
                 class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                 loading="lazy">
        `;

        div.onclick = () => {
            if (!lightbox) return;
            lightbox.classList.remove("hidden");
            lightbox.classList.add("flex");
            lightboxImg.src = src;
        };

        grid.appendChild(div);
    });

    if (lightbox) {
        lightbox.onclick = () => {
            lightbox.classList.add("hidden");
            lightbox.classList.remove("flex");
        };
    }

});
