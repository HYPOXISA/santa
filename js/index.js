//시작
$(document).ready(function () {
  $("#visual").animate({ height: "85vh" });
  $("header img").animate({ top: "10px" });
  $("header img").animate({ width: "40%" });
});
// 반응형
$("header i").on("click", function () {
  $("header > div").toggleClass("move-up");
  $(this).toggleClass("rotate-180");
});
// 스크롤
$(function () {
  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();

    // Page1 animations
    if (sc >= 400 && sc <= 1200) {
      $("#review").removeClass("duration");
      $("#page1 > div").stop(true).animate({ top: "0" });
      $("#page1 li:first-child").stop(true).animate({ right: "-130px" });
      $("#page1 li:last-child").stop(true).animate({ left: "-80px" });
    } else {
      $("#page1 > div").stop(true).animate({ top: "-100%" });
      $("#page1 li:first-child").stop(true).animate({ right: "-500%" });
      $("#page1 li:last-child").stop(true).animate({ left: "-500%" });
    }

    // Header background change
    if (sc >= 200 && sc <= 5000) {
      $("header").css({
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 31%, rgba(231,219,175,0) 100%)",
      });
      $(".headerBox").css({ display: "none" });
    } else {
      $("header").css({
        background: "none",
      });
      $(".headerBox").css({ display: "block" });
    }

    // Page2 animations
    if (sc >= 1000 && sc <= 1900) {
      $(".p2_left > p").stop(true).animate({ top: "0" }, 200);
      $(".p2_left > h2").stop(true).animate({ top: "0" }, 400);
      $(".discoverButtons").stop(true).animate({ top: "80px" }, 600);
      $(".slide li").stop(true).animate({ right: "0", opacity: "1" });
    } else {
      $(".p2_left > p").stop(true).animate({ top: "100px" }, 200);
      $(".p2_left > h2").stop(true).animate({ top: "100px" }, 400);
      $(".discoverButtons").stop(true).animate({ top: "100px" }, 600);
      $(".slide li").stop(true).animate({ right: "-10%", opacity: "0" });
    }

    // Page4 animations
    if (sc >= 2800 && sc <= 3600) {
      $("#review").addClass("duration");
    } else {
      $("#review").removeClass("duration");
    }
  });
});

// Top Button
document.addEventListener("DOMContentLoaded", function () {
  var topButton = document.querySelector(".top_button");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      topButton.classList.add("show");
    } else {
      topButton.classList.remove("show");
    }
  });
  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  });

  //StoryButton
  $(".storyButton p").on("mouseenter", function () {
    $(this).addClass("color");
    $(".white").stop().animate({ top: "-5" });
  });
  $(".storyButton p").on("mouseleave", function () {
    $(this).removeClass("color");
    $(".white").stop().animate({ top: "50" });
  });
  // discoverButton
  $(".discoverButton p").on("mouseenter", function () {
    $(this).addClass("color");
    $(".pink").stop().animate({ top: "0" });
  });
  $(".discoverButton p").on("mouseleave", function () {
    $(this).removeClass("color");
    $(".pink").stop().animate({ top: "50" });
  });

  // page2 setinterval
  setInterval(function () {
    $(".slide").animate({ left: "-39%" }, 2000, function () {
      $(".slide li:first").appendTo(".slide");
      $(".slide").css({ left: "0px" });
    });
  }, 4000);

  //page3
  $("#page3 li").on("mouseenter", function () {
    $(this).children("div").stop().animate({ left: "0" });
  });
  $("#page3 li").on("mouseleave", function () {
    $(this).children("div").stop().animate({ left: "-100%" });
  });
});
