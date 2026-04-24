const sparklesContainer = document.getElementById('sparkles');
const sparkleCount = 18;

function createSparkles() {
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    sparkle.style.width = `${6 + Math.random() * 10}px`;
    sparkle.style.height = sparkle.style.width;
    sparklesContainer.appendChild(sparkle);
  }
}

function followPointer(event) {
  const x = event.clientX;
  const y = event.clientY;
  const ripple = document.createElement('div');
  ripple.className = 'pointer-ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 700);
}

window.addEventListener('DOMContentLoaded', () => {
  createSparkles();
  document.body.addEventListener('pointermove', followPointer);
});
