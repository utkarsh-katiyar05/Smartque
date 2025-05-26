function contactUs() {
  window.location.href = "#contact";
}

// Animated counting for .track-record-number (all finish together)
const duration = 1200; // ms
const frameRate = 16; // ms per frame (~60fps)
const totalFrames = Math.ceil(duration / frameRate);

document.querySelectorAll('.track-record-number').forEach(el => {
  const text = el.textContent.trim();
  const target = parseInt(text.replace(/[^0-9]/g, ''), 10);
  if (!target) return;
  let count = 0;
  const plus = text.includes('+');
  const comma = text.includes(',');
  let frame = 0;

  function run() {
    frame++;
    // Calculate the current value based on frame
    count = Math.round(target * (frame / totalFrames));
    if (count > target) count = target;

    if (comma || target >= 1000) {
      el.textContent = count.toLocaleString() + (plus ? '+' : '');
    } else {
      el.textContent = count + (plus ? '+' : '');
    }

    if (frame < totalFrames) {
      requestAnimationFrame(run);
    } else {
      // Ensure the final value is exact
      el.textContent = (comma || target >= 1000)
        ? target.toLocaleString() + (plus ? '+' : '')
        : target + (plus ? '+' : '');
    }
  }
  run();
});

<!-- Place before </body> in every HTML page -->
<script>
document.querySelectorAll('.animated-section').forEach(section => {
  function animateSection() {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.style.animationDelay = "0.2s";
      section.classList.add('animate-fadein-up');
      window.removeEventListener('scroll', animateSection);
    }
  }
  window.addEventListener('scroll', animateSection);
  animateSection();
});
document.querySelectorAll('.animated-heading').forEach(heading => {
  function animateHeading() {
    const rect = heading.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      heading.style.animationDelay = "0.1s";
      heading.classList.add('animate-fadein-left');
      window.removeEventListener('scroll', animateHeading);
    }
  }
  window.addEventListener('scroll', animateHeading);
  animateHeading();
});
</script>
