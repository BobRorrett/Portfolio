function openModal(imageSrc) {
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
  }

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }

function scrollHorizontally(event) {
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.scrollLeft -= delta * 30; // Adjust the scrolling speed
    event.preventDefault();
  }