import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
export function getProductPage(title) {
    const page = document.createElement("div");
    page.classList.add("page", "product-page", "container");
  
    const mainTitle = getMainTitle(title);
  
    const descr = getProductDescr("Страница в разработке");
    page.append(mainTitle, descr);
  
    return page;
  }