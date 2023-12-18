window.addEventListener('scroll', function () {
  var header = document.getElementById('sticky-header');

  // console.log('Scroll position:', window.scrollY);

  if (window.scrollY > 5) {
    // console.log('Header is now visible');
    header.classList.remove('hidden');
  } else {
    // console.log('Header is hidden');
    header.classList.add('hidden');
  }
});