console.log("Fintech QA Portfolio Loaded");

// Simple interactivity hook (can expand later)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      console.log("Navigating to project...");
    });
  });
});