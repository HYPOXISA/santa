$(document).ready(function () {
  $(".image1").animate({ opacity: "1", top: "15%" }, 500, function () {
    $(".image3").animate({ opacity: "1", top: "50%" }, 500, function () {
      $(".image2").animate({ opacity: "1", top: "75%" });
    });
    $(".headerBox").animate({ width: "100%" });
  });
  // 타이핑 효과
  const text = $("#typing-effect").html();
  let index = 0;
  const typingEffect = () => {
    if (index < text.length) {
      $("#typing-effect").html(
        text.substring(0, index++) + '<span class="cursor">|</span>'
      );
      setTimeout(typingEffect, 10); // 타이핑 속도 조정
    } else {
      $("#typing-effect").html(text); // 커서 제거
    }
  };
  $("#typing-effect").html(""); // 초기화
  typingEffect();
});
// 스크롤
$(function () {
  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    // Page1 animations
    if (sc >= 800 && sc <= 1200) {
      $("#section2 .box1").stop().animate({ opacity: "1", top: "0" });
    } else if (sc >= 1000 && sc <= 1700) {
      $("#section2 .box2").stop().animate({ opacity: "1", top: "0" });
    } else if (sc >= 1800) {
      $("#section3").animate({ width: "100%" });
    } else {
      $("#section2 .box1").stop().animate({ opacity: "0", top: "100px" });
      $("#section2 .box2").stop().animate({ opacity: "0", top: "100px" });
    }
  });
});
