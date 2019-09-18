document.addEventListener('DOMContentLoaded', function () {

    $('body').removeClass('body-overflow');
//slider
    if(document.querySelector('.s_slider')){
      $('.s_slider_images').slick({
        infinite: true,
        dots : true,
        arrows: true,
      });

    }

    //select
    $(document).ready(function() {
      $('select').niceSelect();
    });
    //burger
   if(document.querySelector('.s_header_burger')){
     $('.s_header_burger').click(function(){
       if($('.s_header_burger').hasClass('s_header_burger--open')){
         $('.s_header_burger').removeClass('s_header_burger--open');
         $('.s_header_menu').removeClass('s_header_menu--open');
         // $('body').removeClass('body-overflow');
       } else {
         $('.s_header_burger').addClass('s_header_burger--open');
         $('.s_header_menu').addClass('s_header_menu--open');
         // $('body').addClass('body-overflow');
       }
     })
   }



    //popup thank
  function popupthanks(){
    $('body').addClass('body-overflow');
    $('.s_popup').fadeOut();
    // dont forget to clear forms
    $('.s_popup_thanks').fadeIn();
    setTimeout(function(){
      $('.s_popup_thanks').fadeOut();
      $('body').removeClass('body-overflow');
    },3000)
  }

  // js-close popup
  if(document.querySelector('.js-popup-close')){
    $('.js-popup-close').click(function(){
      $('.s_popup').fadeOut();
      $('body').removeClass('body-overflow');
      // dont forget to clear forms
    })
  }

  // popupmore
  $('.s_popup').mouseup(function (e) {
    var content = $('.s_popup_content');
    if (!content.is(e.target) && content.has(e.target).length === 0) {
      $('.s_popup').fadeOut();
      $('body').removeClass('body-overflow');
      var validator = $('#contacts-popup').validate();
      validator.resetForm();
      document.querySelector('#contacts-popup').reset();
    }
  });


});
