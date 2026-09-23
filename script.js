document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
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

//traduction

let currentLang = "fr";

document.getElementById("translateBtn").addEventListener("click", () => {
    const elements = document.querySelectorAll("[data-fr]");

    if (currentLang === "fr") {
        elements.forEach(el => {
            el.textContent = el.dataset.en;
        });

        document.getElementById("translateBtn").textContent = "🇬🇧 English";
        document.documentElement.lang = "en";
        currentLang = "en";
    } else {
        elements.forEach(el => {
            el.textContent = el.dataset.fr;
        });

        document.getElementById("translateBtn").textContent = "🇫🇷 Français";
        document.documentElement.lang = "fr";
        currentLang = "fr";
    }
});

