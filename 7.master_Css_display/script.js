let leftBtn = document.querySelector(".scroll-btn-left");
let rightBtn = document.querySelector(".scroll-btn-right");

const scroller = document.getElementById("parent");

leftBtn.addEventListener("click", () => {
  scroller.scrollBy({
    left: -320,
    behavior: "smooth",
  });
});

rightBtn.addEventListener("click", () => {
  scroller.scrollBy({
    left: 320,
    behavior: "smooth",
  });
});
