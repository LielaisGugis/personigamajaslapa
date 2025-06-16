document.addEventListener("DOMContentLoaded", () => {
  // Automātiski ieliek pašreizējo gadu kājenei
  document.getElementById("year").textContent = new Date().getFullYear();

  // Slideshow dati — bildes failu nosaukumi mapē images/
  const slideshows = {
    "gym-slideshow": ["es_gym1.webp", "gym2.webp"],
    "football-slideshow": ["futbol1.webp", "futbol2.webp", "futbol3.webp"],
    "music-slideshow": ["peepdefo1.webp", "peep2.webp"]
  };

  Object.entries(slideshows).forEach(([id, images]) => {
    const container = document.getElementById(id);
    if (!container) return;

    let currentIndex = 0;

    // Izveido bildi
    const img = document.createElement("img");
    img.src = `images/${images[currentIndex]}`;
    img.alt = `${id} slideshow image`;
    container.appendChild(img);

    // Izveido pogas iepriekš un nākamais
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "◀";
    prevBtn.className = "slideshow-btn";

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "▶";
    nextBtn.className = "slideshow-btn";

    container.appendChild(prevBtn);
    container.appendChild(nextBtn);

    function updateImage() {
      img.src = `images/${images[currentIndex]}`;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    // Automātiska maiņa ik pēc 5 sekundēm
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }, 5000);
  });
});
