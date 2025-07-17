<script>
  document.addEventListener("DOMContentLoaded", function () {
    // ==== SLIDESHOW FUNCTIONALITY ====
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      const slideWidth = slides[0]?.clientWidth || 0;
      document.querySelector('.slides').style.transform = `translateX(-${index * slideWidth}px)`;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    if (slides.length > 0) {
      setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }

    // ==== RISE MODAL IMAGE DISPLAY ====
    const imageMap = {
      research: 'images/research.jpg',
      innovate: 'images/innovate.jpg',
      support: 'images/support.jpg',
      empower: 'images/empower.jpg',
    };

    window.openModal = function (key) {
      const modal = document.getElementById("rise-modal");
      const img = document.getElementById("rise-modal-img");
      img.src = imageMap[key];
      modal.style.display = "block";
    };

    window.closeModal = function () {
      document.getElementById("rise-modal").style.display = "none";
    };
  });
</script>
