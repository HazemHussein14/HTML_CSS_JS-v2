const flipFront = document.querySelectorAll(".flip-front");

flipFront.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.add("flip");
    setTimeout(() => {
      card.classList.remove("flip");
    }, 10000);
  });
})


