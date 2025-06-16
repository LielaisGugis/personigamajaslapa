document.addEventListener("DOMContentLoaded", () => {
  // Gads kājenē
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Valodu pārslēgšana
  const languageSwitcher = document.getElementById("languageSwitcher");
  if (languageSwitcher) {
    languageSwitcher.addEventListener("change", (e) => {
      const lang = e.target.value;
      document.querySelectorAll("[data-lv]").forEach((el) => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
    });
  }

  // Navigācijas izvēlne (menu toggle)
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // Slideshow bildes
  const slideshows = {
    "gym-slideshow": ["es_gym1.webp", "gym2.webp"],
    "football-slideshow": ["futbol1.webp", "futbol2.webp", "futbol3.webp"],
    "music-slideshow": ["peepdefo1.webp", "peep2.webp"]
  };

  Object.entries(slideshows).forEach(([id, imageNames]) => {
    const container = document.getElementById(id);
    if (!container) return;

    let index = 0;

    const img = document.createElement("img");
    img.src = `images/${imageNames[index]}`;
    img.alt = "Slideshow image";
    img.width = 300;
    img.height = 200;
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";
    container.appendChild(img);

    const prev = document.createElement("button");
    prev.textContent = "◀";
    prev.className = "slideshow-btn prev";

    const next = document.createElement("button");
    next.textContent = "▶";
    next.className = "slideshow-btn next";

    container.appendChild(prev);
    container.appendChild(next);

    const updateImage = () => {
      img.src = `images/${imageNames[index]}`;
    };

    prev.addEventListener("click", () => {
      index = (index - 1 + imageNames.length) % imageNames.length;
      updateImage();
    });

    next.addEventListener("click", () => {
      index = (index + 1) % imageNames.length;
      updateImage();
    });

    // Automātiskā maiņa noņemta
  });
});
