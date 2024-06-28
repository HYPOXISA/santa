$(document).ready(function () {
  $(".headerBox").animate({ width: "100%" });
});

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// 스크롤
$(function () {
  $(window).on(
    "scroll",
    debounce(function () {
      let sc = $(this).scrollTop();

      // Page1 animations
      if (sc >= 300 && sc <= 900) {
        $(".google").stop().animate({ width: "100%", borderRadius: "0" });
        $(".google iframe").stop().animate({ borderRadius: "0" });
      } else {
        $(".google").stop().animate({ width: "70%", borderRadius: "50px" });
        $(".google iframe").stop().animate({ borderRadius: "50px" });
      }
    }, 10)
  );
});
