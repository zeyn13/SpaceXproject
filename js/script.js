$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

document.getElementById("startOrStopImg").onclick = function () {
  var audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();
};
$(document).ready(function () {
  if ($(window).width() > 991) {
    $(".navbar-light .d-menu").hover(
      function () {
        $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
      },
      function () {
        $(this)
          .find(".sm-menu")
          .first()
          .stop(true, true)
          .delay(120)
          .slideUp(100);
      }
    );
  }
});

$(function () {
  var tickerLength = $(".carousel-inner-data ul li").length;
  var tickerHeight = $(".carousel-inner-data ul li").outerHeight();
  $(".carousel-inner-data ul li:last-child").prependTo(
    ".carousel-inner-data ul"
  );
  $(".carousel-inner-data ul").css("marginTop", -tickerHeight);

  function moveTop() {
    $(".carousel-inner-data ul").animate(
      {
        top: -tickerHeight,
      },
      600,
      function () {
        $(".carousel-inner-data ul li:first-child").appendTo(
          ".carousel-inner-data ul"
        );
        $(".carousel-inner-data ul").css("top", "");
      }
    );
  }
  setInterval(function () {
    moveTop();
  }, 3000);
});
