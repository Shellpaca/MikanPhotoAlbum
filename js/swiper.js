
export const HeroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: { 
      crossFade: true
    },
    autoplay: {
      delay: 3000,
  },
  allowTouchMove: false,
});
