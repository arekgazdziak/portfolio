$("#arrow").click(function() {
  window.location.href = '#main';
});

/*SC.initialize({
  client_id: "69443d2b3a72b56dd44f849ed235735b"
});

var track_url = "http://soundcloud.com/arek-gazdziak/little-wing-intro-005"

$(document).ready(function() {

  SC.oEmbed(track_url, document.getElementById('player'));
  console.log(track_url);

});*/


var currentIndex = 0;
var items = $('.portfolio-header');
var itemAmt = items.length;

var dots = $('.nav-dots span');





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

function nextSlide() {

	removeDot();

  currentIndex += 1;
  if ( currentIndex > itemAmt - 1 )
  {
      currentIndex = 0;
  } 

  addDot();

}

function prevSlide() {

	removeDot();
  
  currentIndex -= 1;
  if ( currentIndex < 0 )
  {
      currentIndex = itemAmt - 1;
  } 
  
  addDot();

}

$('.next').click(function() {
  
  nextSlide();
  cycleItems();

});

$('.prev').click(function() {

  prevSlide();
  cycleItems();

});


$('#arrow')
    .mouseover(function() {
        $(this).animate({height: 70}, 500);
    })
    .mouseout(function() {
        $(this).animate({height: 50}, 500);
    });

$('document').ready( function() {

  if($('#main'))
  {
  	  console.log("arek");
      cycleItems();      
  }

});
