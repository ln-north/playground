const cursorPosition = document.querySelector('.cursor-position');

let ticking = false;
function optimizeEventAction(event, func, ...args) {
  if (!ticking) {
    requestAnimationFrame(() => {
      ticking = false;
      cursorPosition.style.left = event.clientX + 'px';
      cursorPosition.style.top = event.clientY + 'px';
    });
    ticking = true;
  }
}

window.addEventListener('mousemove', optimizeEventAction, {passive: true});

const adjustDurationRange = document.querySelector('.adjust-duration');
adjustDurationRange.addEventListener('input', () => {
  adjustDurationRange.setAttribute('data-duration', adjustDurationRange.value);
})
adjustDurationRange.setAttribute('data-duration', adjustDurationRange.value);