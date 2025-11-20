document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".abstract-toggle");

  toggles.forEach(toggle => {
    toggle.style.cursor = "pointer";

    toggle.addEventListener("click", function () {
      // find the next element with class 'abstract'
      let abstract = this.nextElementSibling;
      while (abstract && !abstract.classList.contains("abstract")) {
        abstract = abstract.nextElementSibling;
      }

      if (!abstract) return; // no abstract found

      if (abstract.style.display === "block") {
        abstract.style.display = "none";
      } else {
        abstract.style.display = "block";
      }
    });
  });
});
