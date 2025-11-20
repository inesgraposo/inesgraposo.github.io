document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".abstract-toggle");

  toggles.forEach(toggle => {
    toggle.style.cursor = "pointer";

    toggle.addEventListener("click", function () {
      const abstract = this.nextElementSibling;

      if (abstract.style.display === "block") {
        abstract.style.display = "none";
      } else {
        abstract.style.display = "block";
      }
    });
  });
});
