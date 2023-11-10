// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
/* import 'swiper/css/navigation'; */
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: true,
    speed: 1000,
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});