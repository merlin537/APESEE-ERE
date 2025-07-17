/* about.js */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.sticky-header');
  const scrollUp = () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', scrollUp);
});
