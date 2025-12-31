document.addEventListener("DOMContentLoaded", () => {

  fetch("assets/images.json")
    .then(res => res.json())
    .then(images => {

      const grid = document.getElementById("portfolioGrid");
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightboxImg");

      if (!grid) return;

      // 🔀 SHUFFLE IMAGES (Fisher–Yates)
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }

      images.forEach(file => {
        const card = document.createElement("div");
        card.className = `
          break-inside-avoid
          rounded-2xl overflow-hidden
          bg-gradient-to-br from-black/60 to-black/30
          border border-white/10
          hover:border-cyberblue
          transition-all duration-500
          hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]
          cursor-pointer
        `;

        card.innerHTML = `
          <img src="assets/portfolio/${file}"
               class="w-full h-auto object-contain
                      transition-transform duration-500
                      hover:scale-[1.03]">
        `;

        card.onclick = () => {
          lightbox.classList.remove("hidden");
          lightbox.classList.add("flex");
          lightboxImg.src = `assets/portfolio/${file}`;
        };

        grid.appendChild(card);
      });

      lightbox.onclick = () => {
        lightbox.classList.add("hidden");
        lightbox.classList.remove("flex");
      };

    })
    .catch(err => console.error("Portfolio load failed:", err));

});
