import { titleGsap } from "./gsap.js";

const swiperWrapper = document.getElementById('swiper-wrapper-js');

const getImagesJson = async () => {
    const res = await fetch('./json/imgFileNames.json');
    return await res.json();
}

const createElemImageTag = imageName => {
    const swiperSlideDiv = document.createElement('div');
    swiperSlideDiv.classList.add('swiper-slide');
    
    const slideImgDiv = document.createElement('div');
    slideImgDiv.classList.add('slide-img');
    
    const slideImg = document.createElement('img');
    slideImg.src = `./img/${imageName}`;
    
    slideImgDiv.appendChild(slideImg);
    swiperSlideDiv.appendChild(slideImgDiv)
    swiperWrapper.appendChild(swiperSlideDiv);
}


const main = async () => {
    const rootObj = await getImagesJson();
    rootObj.imgFileNames.forEach(fileName =>{
        createElemImageTag(fileName)
    });

    new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: { 
            crossFade: true
        },
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        allowTouchMove: true,
    });
}
main()