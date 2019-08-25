var card4 = document.querySelector(".card--4");
var cardImage4 = document.querySelector(".card--4 .card__img");
var cardTitle4 = document.querySelector(".card--4 .card__title");

function enterCard4() {

  anime.remove(cardImage4);
  anime({
    targets: cardImage4,
    easing: 'linear',
    translateY: '-65px',
    scaleX: '1.5',
    scaleY: '1.3',
    duration: 200
  });

  anime.remove(cardTitle4);
  anime({
    targets: cardTitle4,
    translateY: '150',
    translateX: '-55',
    color: [
      {value: '#fff'}
    ],
    easing: 'linear',
    duration: 200,
    complete: function() {
      card4.classList.add('active');
    }
  });

}

function leaveCard4() {

  anime.remove(cardImage4);
  anime({
    targets: cardImage4,
    translateY: '0',
    scaleX: '1',
    scaleY: '1',
    elasticity: 100
  });

  anime.remove(cardTitle4);
  anime({
    targets: cardTitle4,
    translateY: '0',
    color: [
      {value: '#000'}
    ],
    elasticity: 100
  });

  card4.classList.remove('active');

}


card4.addEventListener('mouseenter', enterCard4, false);
card4.addEventListener('mouseleave', leaveCard4, false);
window.onscroll = function () {
    myFunction()
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  var shrink = document.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
