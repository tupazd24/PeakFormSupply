// Minimal, accessible button controls (no library needed)
(function () {
  const track = document.getElementById('pf-ig-track');
  if (!track) return;

  // Scroll by ~80% of the viewport width each click
  const step = () => Math.max(240, Math.floor(track.clientWidth * 0.8));

  document.querySelectorAll('.pf-ig__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = parseInt(btn.dataset.dir, 10) || 1;
      track.scrollBy({ left: step() * dir, behavior: 'smooth' });
    });
  });

  // Keyboard improve: allow arrow keys when the track is focused
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') track.scrollBy({ left: step(), behavior: 'smooth' });
    if (e.key === 'ArrowLeft')  track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
})();

// Countdown Timer
(function() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Set the date for the countdown (December 1, 2025)
    const countdownDate = new Date('December 1, 2025 00:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<div class="text-2xl font-bold text-amber-400">The Winter \'25 Drop is Live!</div>';
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
})();
