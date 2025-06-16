document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const languageSwitcher = document.getElementById("languageSwitcher");
  languageSwitcher.addEventListener("change", (e) => {
    const lang = e.target.value;
    document.querySelectorAll("[data-lv]").forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  });

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  const slideshows = {
  "gym-slideshow": [
    { webp: "images/es_gym1.webp", jpg: "images/es_gym1.jpg" },
    { webp: "images/gym2.webp", jpg: "images/gym2.jpg" }
  ],
  "football-slideshow": [
    { webp: "images/futbol1.webp", jpg: "images/futbol1.jpg" },
    { webp: "images/futbol2.webp", jpg: "images/futbol2.jpg" },
    { webp: "images/futbol3.webp", jpg: "images/futbol3.jpg" }
  ],
  "music-slideshow": [
    { webp: "images/peepdefo1.webp", jpg: "images/peepdefo1.jpg" },
    { webp: "images/peep2.webp", jpg: "images/peep2.jpg" }
  ]
};

  Object.entries(slideshows).forEach(([id, images]) => {
  const container = document.getElementById(id);
  if (!container) return;

  let currentIndex = 0;

  // Izveido picture elements
  const picture = document.createElement("picture");

  const source = document.createElement("source");
  source.type = "image/webp";

  const img = document.createElement("img");
  img.alt = "Slideshow image";
  img.width = 300;
  img.height = 200;
  img.style.objectFit = "cover";
  img.style.borderRadius = "8px";

  picture.appendChild(source);
  picture.appendChild(img);
  container.appendChild(picture);

  // Funkcija, lai iestatītu pašreizējo attēlu
  function updateImage() {
    source.srcset = images[currentIndex].webp;
    img.src = images[currentIndex].jpg;
  }

  updateImage();

  // Pogu izveide un pievienošana
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "◀";
  prevBtn.className = "slideshow-btn prev";
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "▶";
  nextBtn.className = "slideshow-btn next";
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  container.appendChild(prevBtn);
  container.appendChild(nextBtn);
});


    container.appendChild(prevBtn);
    container.appendChild(nextBtn);
  });
});
