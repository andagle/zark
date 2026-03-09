const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function () {
      const src = this.getAttribute('data-bs-image');
      modalImage.src = src;
    });
  });