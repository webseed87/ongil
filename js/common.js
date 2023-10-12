
$(document).ready(function () {

  // 메인슬라이더
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    mousewheel: {
      forceToAxis: true,
    },
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  var $videoElements = $('video');
  var $loadingOverlays = $('.loading-overlay');

  // 각 video 요소에 대한 이벤트 리스너를 추가합니다.
  $videoElements.each(function(index) {
    var $video = $(this);
    var $loadingOverlay = $loadingOverlays.eq(index);

    // 비디오의 loadeddata 이벤트를 사용하여 로딩 레이어를 숨깁니다.
    $video.on('loadeddata', function() {
      setTimeout(function() {
        $loadingOverlay.css('display', 'none');
      }, 1000); // 딜레이를 적절하게 조절하세요.
    });
  });

  // 사업분야 부분
  $(".field_item").on("mouseenter", function () {
    $(this).addClass("active");
    $(".field_item").not(this).removeClass("active");
    var businessItem = "." + $(this).data("target");
    $(businessItem).addClass("active"); 

    $(".business_item").not(businessItem).removeClass("active");
  });
});


  // 네비게이션 부분
  $(document).ready(function () {

      checkScreenSize();

    
    $(window).on("resize", function () {
      checkScreenSize();
    });
    function checkScreenSize() {
      if ($(window).width() >= 1200) {
        $(".menu").off("click");
        $(".navigation .menu").removeClass("active");
        $(".menu").on("mouseenter", function () {
          $(this).addClass("active");
        });

        $(".menu").on("mouseleave", function () {
          $(this).removeClass("active");
        });
        $(".menu").off("click");
      } else {
        $(".menu").off("mouseenter"); 
        $(".menu").off("mouseleave"); 
        $(".navigation .menu").on("click", function () {

          $(".navigation .menu.active").removeClass("active");
          $(this).addClass("active");


        });
     
      }
    }


    $(".menu-starter").on("click", function () {
      $(".navigation .menu").eq(0).addClass("active");
      if ($("#header").hasClass('menuing')) {
        $("#header").removeClass('menuing')

      }
      else {
        $("#header").addClass('menuing');

      }

    });

  });


function checkScreenSize() {
  if (window.innerWidth > 720) {
    if (typeof fullpage_api === 'undefined') {
      $('#fullpage').fullpage({
        navigation: false,
        fixedElements: '#header',
        normalScrollElements: '.footer',
      });
    }
  } else {
    if (typeof fullpage_api !== 'undefined') {
      fullpage_api.destroy('all');
    }
  }
}

// 페이지 로드 시와 창 크기 변경 시 화면 크기 확인
$(document).ready(function () {
  checkScreenSize();
});

$(window).on("resize", function () {
  checkScreenSize();
});