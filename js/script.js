$('.banner_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: true,
    navText: ['<i class="fas fa-angle-left arrow-left"></i>','<i class="fas fa-angle-right arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.team-slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,

});



$('.clint_slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
    smartSpeed: 1000,
    arrows: false,

});

$('.testi_slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
    arrows: false,

});
