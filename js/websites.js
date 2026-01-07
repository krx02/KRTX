let data = [];
let index = 0;
const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

let mode = isMobile() ? "mobile" : "desktop";


const img = document.getElementById("showcaseImage");
const title = document.getElementById("showcaseTitle");
const viewer = document.getElementById("viewer");

const mobileBtn = document.getElementById("mobileBtn");
const desktopBtn = document.getElementById("desktopBtn");

fetch("assets/websites.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    render();
  });

function render() {
  const item = data[index];
  img.src = item[mode];
  title.textContent = item.title;

  viewer.scrollTo({ top: 0, behavior: "instant" });

  // toggle styles
  mobileBtn.classList.toggle("bg-gold", mode === "mobile");
  mobileBtn.classList.toggle("text-midnight", mode === "mobile");
  desktopBtn.classList.toggle("bg-gold", mode === "desktop");
  desktopBtn.classList.toggle("text-midnight", mode === "desktop");
}

mobileBtn.onclick = () => {
  mode = "mobile";
  render();
};

desktopBtn.onclick = () => {
  mode = "desktop";
  render();
};

document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % data.length;
  render();
};

document.getElementById("prevBtn").onclick = () => {
  index = (index - 1 + data.length) % data.length;
  render();
};

window.addEventListener("resize", () => {
  const newMode = isMobile() ? "mobile" : "desktop";
  if (newMode !== mode) {
    mode = newMode;
    render();
  }
});
