/*$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY>20){

			$('.navbar').css("background","#079DFF");

			$('.navbar').addClass("sticky");

		

		}else{

			$('.navbar').css("background","none");
			$('.navbar').removeClass("sticky");
		}
	});
});*/

/*$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});*/

const header=document.querySelector('.navbar');
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 20) {
        header.style.backgroundColor = '#087bc6';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

function rotateFunction(){
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
}

var element = document.getElementById('mainbox');

  element.classList.remove('animate');

  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);