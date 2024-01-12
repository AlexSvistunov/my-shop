import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
export function getCatalogPage() {
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");
  
    const mainTitle = getMainTitle("Каталог");
  
    const descr = getProductDescr("Страница в разработке");
    page.append(mainTitle, descr);
  
    return page;
  }
  