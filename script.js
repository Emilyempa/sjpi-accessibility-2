document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".product-card").forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", "false");
      btn.classList.remove("active");
    });
    button.setAttribute("aria-pressed", "true");
    button.classList.add("active");
  });
});
