window.addEventListener('scroll', function () {
  var header = document.getElementById('sticky-header');

  // Log the current scroll position
  console.log('Scroll position:', window.scrollY);

  if (window.scrollY > 50) {
    // Log a message when the header becomes visible
    console.log('Header is now visible');
    header.classList.remove('hidden');
  } else {
    // Log a message when the header is hidden
    console.log('Header is hidden');
    header.classList.add('hidden');
  }
});