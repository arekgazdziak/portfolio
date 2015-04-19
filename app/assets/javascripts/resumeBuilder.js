$("#arrow").click(function() {
  window.location.href = '#main';
});

var currentIndex = 0;
var items = $('.portfolio-header');
var itemAmt = items.length;

cycleItems();

function cycleItems() {
  var item = $('.portfolio-header').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

$('.next').click(function() {
  currentIndex += 1;

  

  cycleItems();

});

$('.prev').click(function() {
  currentIndex -= 1;

  

  cycleItems();

});