const panel = document.querySelectorAll(".panel");

panel.forEach((e) => {
  e.addEventListener("click", () => {
    e.firstElementChild.classList.toggle("hidden");
    e.lastElementChild.classList.toggle("hidden");
  });
});
