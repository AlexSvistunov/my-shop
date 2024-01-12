import { router } from "/src/js/main.js";
import { getLogo } from "/src/js/Components/Logo/logo.js";
import './header.css'

function getNavigationLink(path, text) {
  const link = document.createElement('a')
  link.href = path
  link.classList.add('btn')
  link.textContent = text

  link.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate(path)
  });

  return link
}
export function getHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const container = document.createElement("div");
    container.classList.add("container", "header__container");

    const logo = getLogo();
  
    const nav = document.createElement("nav");
    nav.classList.add("navigation");

  
    let link1 = getNavigationLink('/', 'Главная страница')
    let link2 = getNavigationLink('/catalog', 'Каталог')
    let link3 = getNavigationLink('/basket', 'Корзина')
  
    header.append(container);
    container.append(logo, nav);
    nav.append(link1, link2, link3);
    return header;
  }
  