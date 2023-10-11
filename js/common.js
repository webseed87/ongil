
$(document).ready(function(){
    if($(window).width() < 1024){ $('#fullpage').removeAttr('id'); }

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
// 사업분야 부분
$(".field_item").on("mouseenter", function() {
    $(this).addClass("active");
    $(".field_item").not(this).removeClass("active");
        var businessItem = "." + $(this).data("target");
    $(businessItem).addClass("active"); // "actvie" 대신 "active"로 수정

    $(".business_item").not(businessItem).removeClass("active");
});

// 네비게이션 부분
$(document).ready(function() {
    
    function checkScreenSize() {
        if ($(window).width() >= 1200) {
            $(".navigation .menu").removeClass("active");
          $(".menu").on("mouseenter", function() {
            $(this).addClass("active");
          });
      
          $(".menu").on("mouseleave", function() {
            $(this).removeClass("active");
          });
                $(".menu").off("click");
        } else {
          $(".navigation .menu").on("click", function() {
       
                $(".navigation .menu.active").removeClass("active");
                $(this).addClass("active");

            
          });
           $(".menu").off("mouseenter");
          $(".menu").off("mouseleave");
        }
      }
      
      // 페이지 로드 및 창 크기 변경 시 화면 크기 확인
      $(document).ready(function() {
        checkScreenSize();
      });
      
      $(window).on("resize", function() {
        checkScreenSize();
      });


    $(".menu-starter").on("click", function() {
        $(".navigation .menu").eq(0).addClass("active");
        if ($("#header").hasClass('menuing')) {
            $("#header").removeClass('menuing')

        }
        else{
            $("#header").addClass('menuing');
           
        }

    });
    
});
});

$('#fullpage').fullpage({
    
    //options here

    navigation: false,
    fixedElements: '#header',
    normalScrollElements: '.footer',
});
