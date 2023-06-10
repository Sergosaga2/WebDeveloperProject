$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
      // loop:true,
      margin:10,
      nav:true,
      navClass: ['slider_nav-left', 'slider_nav-right'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });

$('.img-search').on('click', function() {
    $('.input-search').toggleClass('input-search-active');
  });
  $('.button-menu').on('click', function() {
    $(this).toggleClass('button-menu-active');
    $('.drop-down-menu').toggleClass('drop-down-menu-active');
  });
  $('.close').on('click', function() {
    $('.drop-down-menu').toggleClass('drop-down-menu-active');
  });


  $('.mockups-link').on('click', function() {
    $(this).css('background', '#00897b');
    $(this).css('color', '#fff');
    $('.active-link').css('background', '#fff');
    $('.active-link').css('color', '#000');
    $('.web-design-link').css('background', '#fff');
    $('.web-design-link').css('color', '#000');
    $('.uiux-design-link').css('background', '#fff');
    $('.uiux-design-link').css('color', '#000');

    $('.block-images_web-design').css('display', 'none');
    $('.block-images').css('display', 'none');
    $('.block-images_uiux-design').css('display', 'none');
    $('.block-images_mockups').css('display', 'flex');
  })

  $('.active-link').on('click', function() {
    $(this).css('background', '#00897b');
    $(this).css('color', '#fff');
    $('.mockups-link').css('background', '#fff');
    $('.mockups-link').css('color', '#000');
    $('.web-design-link').css('background', '#fff');
    $('.web-design-link').css('color', '#000');
    $('.uiux-design-link').css('background', '#fff');
    $('.uiux-design-link').css('color', '#000');

    $('.block-images').css('display', 'flex');
    $('.block-images_web-design').css('display', 'none');
    $('.block-images_uiux-design').css('display', 'none');
    $('.block-images_mockups').css('display', 'none');
  })

  $('.web-design-link').on('click', function() {
    $(this).css('background', '#00897b');
    $(this).css('color', '#fff');
    $('.mockups-link').css('background', '#fff');
    $('.mockups-link').css('color', '#000');
    $('.active-link').css('background', '#fff');
    $('.active-link').css('color', '#000');
    $('.uiux-design-link').css('background', '#fff');
    $('.uiux-design-link').css('color', '#000');

    $('.block-images').css('display', 'none');
    $('.block-images_web-design').css('display', 'flex');
    $('.block-images_uiux-design').css('display', 'none');
    $('.block-images_mockups').css('display', 'none');
  })

  $('.uiux-design-link').on('click', function() {
    $(this).css('background', '#00897b');
    $(this).css('color', '#fff');
    $('.mockups-link').css('background', '#fff');
    $('.mockups-link').css('color', '#000');
    $('.active-link').css('background', '#fff');
    $('.active-link').css('color', '#000');
    $('.web-design-link').css('background', '#fff');
    $('.web-design-link').css('color', '#000');
    
    $('.block-images').css('display', 'none');
    $('.block-images_web-design').css('display', 'none');
    $('.block-images_uiux-design').css('display', 'flex');
    $('.block-images_mockups').css('display', 'none');
  });

 $(function(){
        $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                    return false;
                }
            }
        });
    });

  $('.send').click(function() {
      $('.modal-window')
        .css('display', 'block');
      $('body').css('overflow-y', 'hidden')
      $('.close_modal-window').click(function() {
        $('.modal-window')
          .css('display', 'none')
        $('body').css('overflow-y', 'scroll')
      });
    });

});

  

//<script>
//  $(document).ready(function() {
//    $('.img-search').on('click', function() {
//      $('.input-search').toggleClass('input-search-active');
//    });
//    $('.button-menu').on('click', function() {
//      $('.drop-down-menu').toggleClass('drop-down-menu-active');
//    });
//    $('.close').on('click', function() {
//      $('.drop-down-menu').toggleClass('drop-down-menu-active');
//    });
//  });
//</script>