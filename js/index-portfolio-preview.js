document.addEventListener("DOMContentLoaded", () => {

  fetch("assets/images.json")
    .then(res => res.json())
    .then(images => {

      const grid = document.getElementById("portfolioGrid");
      if (!grid) return;

      const PREVIEW_LIMIT = 3;

      // shuffle
      const shuffled = images
        .map(img => ({ img, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(i => i.img)
        .slice(0, PREVIEW_LIMIT);

      shuffled.forEach(file => {

        const card = document.createElement("div");
        card.className = `
          rounded-2xl
          bg-darker
          border border-white/10
          hover:border-cyberblue
          transition-all duration-300
          overflow-hidden
          flex items-center justify-center
          max-h-[640px]
        `;

        card.innerHTML = `
          <img src="assets/portfolio/${file}"
               class="max-h-[640px] w-auto max-w-full
                      object-contain block
                      transition-transform duration-300
                      hover:scale-[1.03]">
        `;

        grid.appendChild(card);
      });

    })
    .catch(err => console.error(err));

});
