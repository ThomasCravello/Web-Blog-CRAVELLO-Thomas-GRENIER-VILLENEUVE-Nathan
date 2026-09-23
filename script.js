document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    
    // --- AUTOPLAY AJOUTÉ ICI ---
    autoplay: {
      delay: 2000, // 5000 ms = 5 secondes
      disableOnInteraction: false, // Continue le défilement automatique même si l'utilisateur clique/glisse
    },
    
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});