const carousel = document.querySelector('.carousel');

let isDragging = false,
  startX, startScrollLeft;

// fungsi mouse klik-hold and drag
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.clientX
  startScrollLeft = carousel.scrollLeft;
}

// fungsi dragging
const dragging = (e) => {
  if (!isDragging) return;
  let dragDirection = startX - e.clientX;
  carousel.scrollLeft = startScrollLeft + dragDirection;

}

// mouse stop
const mouseStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', mouseStop);