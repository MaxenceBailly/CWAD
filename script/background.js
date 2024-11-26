window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const slowScroll = scrollPosition * -0.15;
    document.body.style.backgroundPosition = `center ${slowScroll}px`;
  });
  