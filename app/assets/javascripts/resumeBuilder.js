$("#arrow").click(function() {
  window.location.href = '#main';
});


    /*<nav id="nav-dots" class="nav-dots">
      <span class="nav-dot-current"></span>
      <span></span>
      <span></span>
    </nav>*/

var currentIndex = 0;
var items = $('.portfolio-header');
var itemAmt = items.length;

var dots = $('.nav-dots span');



cycleItems();

function addDot() {

    $('.nav-dots span').eq(currentIndex).addClass("nav-dot-current");

}

function removeDot() {

    $('.nav-dots span').eq(currentIndex).removeClass("nav-dot-current");

}

function cycleItems() {
  var item = $('.portfolio-header').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

$('.next').click(function() {
  
	removeDot();

  currentIndex += 1;
  if ( currentIndex > itemAmt - 1 )
  {
      currentIndex = 0;
  } 

  addDot();

  cycleItems();

});

$('.prev').click(function() {

	removeDot();
  
  currentIndex -= 1;
  if ( currentIndex < 0 )
  {
      currentIndex = itemAmt - 1;
  } 
  
  addDot();

  cycleItems();

});