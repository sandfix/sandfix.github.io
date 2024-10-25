$(document).ready(function() {
  $(".multiple-items").slick({
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
          {
          breakpoint: 1080,
          settings: {
          slidesToShow: 1
          }
          }
      ],
      slidesToShow: 3
  });
});