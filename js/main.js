let uparr = document.querySelector(".comment .arrows button.a"),
downar =document.querySelector(".comment .arrows button.b");

// console.log(uparr , downar);

//   var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });




const allDiv = document.querySelectorAll(".cards .box ");
console.log(allDiv);

allDiv.forEach((element) => {
    element.onclick = (_) => {
      clear();
      element.classList.add("popular");
  };
});

function clear() {
  allDiv.forEach((element) => {
    element.classList.remove("popular");
  });
}