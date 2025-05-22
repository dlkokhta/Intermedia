const slideCount = slides.children.length;
let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % slideCount;
  updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + slideCount) % slideCount;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

const dotsContainer = document.getElementById("dots");

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
  });
});
