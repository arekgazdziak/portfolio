$("#arrow").click(function() {
  window.location.href = '#main';
});

$('#arrow')
    .mouseover(function() {
        $(this).animate({height: 70}, 500);
    })
    .mouseout(function() {
        $(this).animate({height: 50}, 500);
    });


var currentIndex = 0;
var items = $('.portfolio-header');
var itemAmt = items.length;
var dots = $('.nav-dots span');



function cycleItems() {
  var item = $('.portfolio-header').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

function addDot() {

    $('.nav-dots span').eq(currentIndex).addClass("nav-dot-current");

}

function removeDot() {

    $('.nav-dots span').eq(currentIndex).removeClass("nav-dot-current");

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

$('.nav-dot-firts').click(function() {
 
  removeDot();
  currentIndex = 0;
  addDot();
  cycleItems(); 
  
});

$('.nav-dot-second').click(function() {
 
  removeDot();
  currentIndex = 1;
  addDot();
  cycleItems(); 
  
});

$('.nav-dot-third').click(function() {
 
  removeDot();
  currentIndex = 2;
  addDot();
  cycleItems(); 
  
});

$('.next').click(function() {
  
  nextSlide();
  cycleItems();

});

$('.prev').click(function() {

  prevSlide();
  cycleItems();

});


$(document).ready( function() {

  if($('#main'))
  {
      cycleItems();      
  }

});

coded = "g5Yd1gXuXmgd@14gmi.HZ4";
key = "QxEaMyCknlV8e4RHs52IXSj9ogNbWdDiK6YvfUpB3GLhwOZ1qAFu7m0ctrJPzT";
shift = coded.length;
link="";
for (i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i);
    link += (ltr);
  }
  else {     
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
    link += (key.charAt(ltr));
  }
}
$('.email').append("<a href='mailto:"+link+"'>"+link+"</a>");
