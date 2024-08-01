document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");
  const toggleButton = document.querySelector("#mydocs .toggle-button");
  const toggleContent = document.querySelector("#mydocs .toggle-content");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
  toggleButton.addEventListener("click", function () {
    toggleContent.classList.toggle("show");
  });

  let bg = document.body;
  let colorIndex = 0;
  const colors = ["#1e1e1e", "#333", "#555", "#777", "#999", "#bbb"];

  function animateBackground() {
    colorIndex = (colorIndex + 1) % colors.length;
    bg.style.background = `linear-gradient(180deg, ${colors[colorIndex]}, ${
      colors[(colorIndex + 1) % colors.length]
    })`;
  }

  setInterval(animateBackground, 5000);
});
