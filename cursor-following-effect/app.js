const cursorPosition = document.querySelector('.cursor-position');

window.addEventListener('mousemove', (event) => {
  cursorPosition.style.left = event.clientX + 'px';
  cursorPosition.style.top = event.clientY + 'px';
});