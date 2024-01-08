document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var parallaxContainer = document.querySelector('.parallax-container');
    parallaxContainer.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
  });