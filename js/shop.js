$(document).ready(function () {
  $("#visual > div").animate({ width: "90%" });

  // Fragrance
  $(window).scroll(function () {
    $("#container section ul").each(function (index) {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass("show");
      } else {
        $(this).removeClass("show");
      }
    });
  });

  $("section ul").on("click", function () {
    const $p = $(this).find("p");
    if ($p.css("opacity") == 0) {
      $p.stop().animate({ opacity: 1 }, 500);
    } else {
      $p.stop().animate({ opacity: 0 }, 500);
    }
  });

  $("#container ul").on("mouseenter", function () {
    // 마우스를 올렸을 때
    $(this).animate({ backgroundColor: "#f9f4f4", borderRadius: "50%" });
    $(this).find("img").addClass("shake");
    // click 문구 추가
    $(this).append('<div class="click-text">click</div>');
  });

  $("#container ul").on("mouseleave", function () {
    // 마우스를 뗐을 때
    $(this).animate({ backgroundColor: "none", borderRadius: "0%" });
    $(this).find("img").removeClass("shake");
    // click 문구 제거
    $(this).find(".click-text").remove();
    // p 요소의 투명도 설정
    $(this).find("p").stop().animate({ opacity: 0 }, 500);
  });
});
