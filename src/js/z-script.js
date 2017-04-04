jQuery(document).ready(function($){  

  /* language change */
  $('.language__active .language__link').click(function(e){ 
    e.preventDefault();
    $(this).closest('.language').find('.language__dropdown').toggle();   
  });
  $('.language__dropdown .language__link').click(function(e){
    e.preventDefault();
    // var langClass = $(this).attr('class');
    // var langText = $(this).html();
    // $(this).closest('.language').find('.language__active .language__link').removeClass().addClass(langClass).html(langText);    
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
        breakpoint: 940,
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
  if ($(window).width() < 940) {
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
        breakpoint: 940,
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





  /* Hamburger main nav */
  // $('.main-hamburger').click(function(e) { 
  //     e.preventDefault();
  //     if ($(window).width() < 768) {
  //       $('.search__input').hide();
  //     }
  //     $(this).closest('.nav').find('.nav__list').toggle();
  // });



  // if ($(window).width() < 768) {
  //   $('#head__search input[type="search"]').focus(function(e) { 
  //       $(this).closest('.header').find('.header__slogan').css('visibility', 'hidden');
  //   });
  //   $('#head__search input[type="search"]').blur(function(e) { 
  //       $(this).closest('.header').find('.header__slogan').css('visibility', 'visible');
  //   });
  // }


  // $(window).resize(function(){
  //   if ($(window).width() >= 768) {
  //     $('.header__slogan').css('visibility', 'visible');
  //     $('.nav__list').show();
  //   } else if ($(window).width() >= 1120) {
  //     $('.search__input').show();
  //   } else {
  //     $('.search__input').hide();
  //     $('.nav__list').hide();
  //   }
  // });

  // /* Categories sub-list */
  // $('.categories__link').click(function(e) { 
  //     e.preventDefault();
  //     $(this).siblings('.sub-categories').slideToggle();
  // });

  // /* Hamburger categories */
  // $('.cat-hamburger').click(function(e) { 
  //     e.preventDefault();
  //     $(this).siblings('.categories__list').slideToggle();
  // });

  // /* плавный скролл наверх */
  // $('.up').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });

   

  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }


});

