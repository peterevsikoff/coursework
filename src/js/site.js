import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled_swiper_button'
    },
  });

  document.querySelector("#navigationMenuButton").addEventListener( "click" , () => {
    document.querySelector(".navigation-wrap").classList.toggle("navigation-active");
  });