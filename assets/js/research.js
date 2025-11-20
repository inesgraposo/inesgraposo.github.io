document.addEventListener("DOMContentLoaded", function() {
  const abstractToggles = document.querySelectorAll('.abstract-toggle');

  abstractToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      const dropdown = toggle.parentElement.nextElementSibling;
      dropdown.classList.toggle('open');
    });
  });
});

