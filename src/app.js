// let swiper = new Swiper(".swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 3,
//         slideShadows: true
//     },
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2
//         },
//         768: {
//             slidesPerView: 1
//         },
//         1024: {
//             slidesPerView: 2
//         },
//         1560: {
//             slidesPerView: 3
//         }
//     }
// });

// Swiper Ratio Breakpoints
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 10,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    scale: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});
