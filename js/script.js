const carousel = document.querySelector('.carousel');
const arrowBtn = document.querySelectorAll('.wrapper button');

const cardFirstWidth = carousel.querySelector('.card').offsetWidth;


arrowBtn.forEach(btn => {
  btn.addEventListener('click', function () {

    if (btn.id === 'left') {
      carousel.scrollLeft = carousel.scrollLeft - cardFirstWidth
    } else if (btn.id === 'right') {
      carousel.scrollLeft = carousel.scrollLeft + cardFirstWidth
    }
  });
})

let isDragging = false,
  startX, startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft;
  console.log(startScrollLeft);
}

const dragg = (e) => {
  if (!isDragging) return;
  let dragDirectin = startX - e.pageX;
  console.log(dragDirectin + startScrollLeft);
  carousel.scrollLeft = dragDirectin + startScrollLeft;
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragg);
carousel.addEventListener('mouseup', dragStop);