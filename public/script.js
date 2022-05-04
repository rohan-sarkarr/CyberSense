
const header = document.querySelector('.navbar');
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 20) {
    header.style.backgroundColor = '#087bc6';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

function rotateFunction() {
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
}

var element = document.getElementById('mainbox');

element.classList.remove('animate');

setTimeout(function () {
  element.classList.add('animate');
}, 5000);

$(document).ready(function () {

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }

  });
});