// Anime.js Animation Example for Hero Section
anime({
  targets: '.hero-content h1',
  opacity: [0, 1],
  translateY: [-50, 0],
  duration: 1500,
  easing: 'easeOutExpo',
  delay: 500
});

anime({
  targets: '.cta-button',
  opacity: [0, 1],
  translateY: [50, 0],
  duration: 1500,
  easing: 'easeOutExpo',
  delay: 1000
});
