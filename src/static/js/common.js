var body = document.getElementsByTagName("body")[0];
var modal = document.getElementsByClassName('l-modalRegister')[0];
var btn = document.getElementById("openModal");
var btnCloseModal = document.getElementById("modalBtnClose");
var modalForm = document.getElementById("modalRegisterForm");
var modalSuccess = document.getElementById("modalRegisterSuccess");
var close = document.getElementsByClassName("c-close-modal")[0];



//For example display purposes, to be deleted========

var showSuccess = document.getElementById("successExample");

showSuccess.onclick = function() {
  modalForm.style.display = "none";
  modalSuccess.style.display = "block";
}

//===================================================



btnCloseModal.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "visible";
}

btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

close.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "visible";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "visible";
    }
}


$(document).ready(function(){

  $(document).on("scroll", onScroll);

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.l-header-navbar-item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 50 <= scrollPos && refElement.position().top - 50 + refElement.height() > scrollPos) {
            $('.l-header-navbar-item').removeClass("l-header-navbar-item__active");
            currLink.parent().addClass("l-header-navbar-item__active");
        }
        else{
            currLink.removeClass("l-header-navbar-item__active");
        }
    });
  }

  //Smooth scroll

  $('a[href^="#"]').on('click', function(e) {
    var hash  = this.hash,
      $hash = $(hash),
        addHash = function() {
            window.location.hash = hash;
        };

    if ( hash !== '#hero' ) {
        $('html,body').animate({ 'scrollTop': $hash.offset().top -50 }, 500, addHash);
    } else {
        $('html,body').animate({ 'scrollTop': $hash.offset().top }, 500, addHash);
    }
    e.preventDefault();
  });

  //-----------

  $(".c-nav-burger").on('click', function() {
    $(".c-nav-burger").toggleClass("c-nav-burger__active");
    $(".l-header-navbar").toggleClass("l-header-navbar__active");
  });

  $(".l-header-navbar-item a").on('click', function() {
    if ($(window).width() < 990) {
      $(".l-header-navbar").toggleClass("l-header-navbar__active");
      $(".c-nav-burger").toggleClass("c-nav-burger__active");
    }
  });

  $(".owl-carousel").owlCarousel({
      slideSpeed : 400,
      items: 3,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:false,
          loop:true,
          autoplay:true
        },
        720:{
          items:2,
          nav:false,
          loop:true,
          autoplay:true
        },
        1000:{
          items:3,
          nav:false,
          loop:true
        }
      }
  });

  owl = $('.owl-carousel').owlCarousel();

  $(".c-slider-control-arrow-left").click(function () {
      owl.trigger('prev.owl.carousel');
  });

  $(".c-slider-control-arrow-right").click(function () {
      owl.trigger('next.owl.carousel');
  });
});