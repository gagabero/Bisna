/*-----------------------------------------------
# Swiper Slider
-----------------------------------------------*/
// ---------------- Hero
var swiper = new Swiper(".hero", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  effect: "fade",
  keyboard: true,
  spaceBetween: 5,
  followFinger: true,
  autoplay: {
    delay: 4000,
  },
});

// ---------------- Popular Tours
var swiper = new Swiper(".popular-tours", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    // When screen size is 576px or larger
    320: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    // When screen size is 768px or larger
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // When screen size is 992px or larger
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // When screen size is 1200px or larger
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// ---------------- Popular Plaes
var swiper = new Swiper(".popular-places", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var rellax = new Rellax(".rellax");

/*-----------------------------------------------
# Tooltip
-----------------------------------------------*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*-----------------------------------------------
# Popovers
-----------------------------------------------*/
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

/*-----------------------------------------------
# Regions of georgia
-----------------------------------------------*/
const paths = document.querySelectorAll(".regions-of-georgia path[data-link]");
paths.forEach((path) => {
  path.addEventListener("click", () => {
    const link = path.getAttribute("data-link");
    if (link) {
      window.location.href = link;
    }
  });
});


/*-----------------------------------------------
# Preloader
-----------------------------------------------*/
window.addEventListener("load", function () {
  const loadingIndicatorContainer = document.querySelector(
    ".loading-indicator"
  );
  const siteContent = document.querySelector(".site-content");

  loadingIndicatorContainer.style.display = "none";
  siteContent.style.display = "block";
  setTimeout(() => {
    siteContent.classList.add("fade-in");
  }, 10);
});
