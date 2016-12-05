$(function() {
  var scrollDom = $('.slider-wrapper');
  var slideWidth = $('.slider-wrapper').outerWidth();
  var slider = $('.slider-list');
  var sliders = $('.slider-list > li');
  var slidersLength = $('.slider-list > li').length + 1;
  var thumnails = $('.slider-buttons > li');
  var distances = [0]

  // init
  sliders.css({width: slideWidth});
  for (var i = 1; i < slidersLength; i++) {
    distances.push(slideWidth * i);
  }

  thumnails.on('touchstart', function () {
    index = thumnails.index(this);
    scrollDom.stop().animate({scrollLeft: distances[index]}, "fast");
  });

  // slider.on({
  //   touchstart: function (event) {
  //     direction = null;
  //     movedX = startedX = event.originalEvent.touches[0].pageX;
  //     index = sub.index(this);
  //   },
  //   touchmove: function (event) {
  //     movedX = event.originalEvent.touches[0].pageX
  //   },
  //   touchend: function (event) {
  //     difference = startedX - movedX;
  //     distance = Math.abs(difference);
  //
  //     // left
  //     if (difference > 0) {
  //       // csl('left');
  //     // right
  //     } else if (difference < 0) {
  //       csl('right');
  //     }
  //   }
  // });
});

function csl(v) {
  console.log(v);
}
