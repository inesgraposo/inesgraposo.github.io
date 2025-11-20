document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".abstract-toggle");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const abstract = toggle.parentElement.nextElementSibling;
      abstract.classList.toggle("open");
    });
  });
});
