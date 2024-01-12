import { router } from "/src/js/main.js";
import { getLogo } from "/src/js/Components/Logo/logo.js";
import { getNavigationLink } from "../NavigationLink/navigationLink";
import { getBasketBtn } from "../BasketBtn/baksetBtn";
import './header.css'


export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const container = document.createElement("div");
    container.classList.add("container", "header__container");

    const logo = getLogo();
    const baksetBtn = getBasketBtn();
  
    const nav = document.createElement("nav");
    nav.classList.add("navigation");

  
    let link1 = getNavigationLink('/', 'Главная страница')
    let link2 = getNavigationLink('/catalog', 'Каталог')
    let link3 = getNavigationLink('/basket', 'Корзина')
  
    header.append(container);
    container.append(logo, nav, baksetBtn);
    nav.append(link1, link2);
    return header;
  }
  