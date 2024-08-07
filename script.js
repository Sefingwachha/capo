document.addEventListener("DOMContentLoaded", function () {
  new Splide("#logo-carousel", {
    type: "loop",
    drag: "free",
    focus: "center",
    gap: "1rem",
    pauseOnHover: true,
    pauseOnFocus: false,
    pagination: false,
    arrows: false,
    perPage: 4,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1200: {
        perPage: 3,
      },
      992: {
        perPage: 2,
      },
      768: {
        perPage: 2,
      },
    },
  }).mount( window.splide.Extensions );
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    perPage: 2,
    perMove: 1,
    gap: "2rem",
    pagination: false,
    padding: {
      left: "150px",
    },
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
        padding: {
          left: "0px",
          right: "0px",
        },
      },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const paginationItems = document.querySelectorAll(".pagination .page-item");
  paginationItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      paginationItems.forEach((p) => p.classList.remove("active"));
      item.classList.add("active");
      const page = item.getAttribute("data-page");
      document.querySelector(".row").className = `row page-${page}`;
    });
  });
});
