const accordionTitle = document.querySelectorAll(".accordion-title");

accordionTitle.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active")
    const nextEl = item.nextElementSibling;
    if (nextEl.style.height) {
      nextEl.style.height = null;
      item.style.fontWeight = "normal";
    } else {
      nextEl.style.height = `${nextEl.scrollHeight}px`;
      item.style.fontWeight = "bold"
    }
  });
});