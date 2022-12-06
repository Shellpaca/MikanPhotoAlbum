
export const HeroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: { 
      crossFade: true
    },
    autoplay: {
      speed: 300,
  },
  allowTouchMove: false,
});
