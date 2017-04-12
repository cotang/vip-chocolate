jQuery(document).ready(function($){  

  /* breakpoints */
  var screenMonitor = 940;
  var screenTablet = 768;

  /* language change */
  $('.language__active .language__link').click(function(e){ 
    e.preventDefault();
    $(this).closest('.language').find('.language__dropdown').toggle();   
  });
  $('.language__dropdown .language__link').click(function(e){
    e.preventDefault(); 
    $(this).closest('.language__dropdown').hide(); 
    return false;
  });

  /* галерея "promo" */
  $('.promo__gallery').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: screenTablet,
        settings: {
          arrows: false,
        }
      }
    ]  
  });
  var dotsWidth = $('.promo__gallery').find('.slick-dots').outerWidth(true)*0.5 + 'px';
  // if ($(window).width() >= 940) {
    $('.promo__gallery').find('.slick-prev').css('left', 'calc(50% - ' + dotsWidth +')'); 
    $('.promo__gallery').find('.slick-next').css('right', 'calc(50% - ' + dotsWidth +')'); 
  // }

  /* галерея "catalogue" */
  $('.catalogue__gallery').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });

  $('.nav__link--search').click(function(e) { 
      e.preventDefault();
      $(this).closest('.nav__item--search').find('.nav-search').toggle();
  });

  /* Search */
  if ($(window).width() < screenTablet) {
    $('.basket').appendTo('.nav');
    $('.nav__item--search').appendTo('.nav');
    $('.main-hamburger').click(function(e) { 
        e.preventDefault();
        $(this).closest('.nav').find('.nav__list').toggle();
    });    
  }

  /* галерея "brand-examples" */
  $('.brand-examples__gallery').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: screenTablet,
        settings: {
          arrows: false,
        }
      }
    ] 
  });

  var dotsWidth2 = $('.brand-examples__gallery').find('.slick-dots').outerWidth(true)*0.5 + 'px';
  // if ($(window).width() >= 940) {
    $('.brand-examples__gallery').find('.slick-prev').css('left', 'calc(50% - ' + dotsWidth2 +')'); 
    $('.brand-examples__gallery').find('.slick-next').css('right', 'calc(50% - ' + dotsWidth2 +')'); 
  // }


  $('.faq__link').click(function(e) { 
      e.preventDefault();
      $(this).next('.faq__text').slideToggle();
  });

  $('.category-sorting__sort').click(function(e) { 
      e.preventDefault();
      $(this).next('.category-sorting__list').toggle();
      $(this).toggleClass('category-sorting__sort--active');
  });
  $('.category-sorting__item a').click(function(e) { 
      e.preventDefault();
      $(this).closest('.category-sorting__list').hide();
      $(this).closest('.category-sorting__type').find('.category-sorting__sort').text($(this).text());
      $(this).closest('.category-sorting__type').find('.category-sorting__sort').removeClass('category-sorting__sort--active');
  });

  if ($(window).width() < screenTablet) {
    $('.page--contacts').find('.contacts__img').appendTo('.contacts');
    $('.page--contacts').find('.contacts__tel').appendTo('.contacts__inner');
  }

    // Photogallery
   $('.photogallery__main-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.photogallery__thumb-gallery',
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Предыдущее</button>',
    nextArrow: '<button type="button" class="slick-next">Следующее</button>',
    dots: false,
    centerMode: true,
    centerPadding: '0'
  });
  $('.photogallery__thumb-gallery').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.photogallery__main-gallery',
    arrows: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: screenTablet,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });

  /* галерея "item" */
  $('.catalogue-item__gallery').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0' 
  });


  /* Basket in modal window */
  $('.basket, .catalogue-item .btn').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'hidden'});   
    $('.overlay').show();
  });
  /* Close modal window */
  $('.overlay__bg, .overlay__close').click( function(e){ 
    e.preventDefault();
    $('body').css({'overflow':'auto'});
    $(this).closest('.overlay').fadeOut(400);
  });

  /* coffee cup script */
  if ($('.page').hasClass('page--index')) {
    if ($(window).width() >= screenTablet) {
      draw();  
    }
  }

});

