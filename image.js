const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;


function openModal(index) {
  currentIndex = index;
  modal.style.display = 'block';
  modalImage.src = galleryItems[index].src;
}


function closeModal() {
  modal.style.display = 'none';
}


function navigateImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryItems.length - 1;
  if (currentIndex >= galleryItems.length) currentIndex = 0;
  modalImage.src = galleryItems[currentIndex].src;
}


galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', () => navigateImage(-1));
nextBtn.addEventListener('click', () => navigateImage(1));


modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});