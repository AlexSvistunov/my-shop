import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
import { getProductCard } from "/src/js/Components/ProductCard/productCard.js";
export function getMainPage() {
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container");
  
    const mainTitle = getMainTitle("Главная страница");
  
    const list = document.createElement("ul");
    list.classList.add("product-list", "list-reset");
  
    page.append(mainTitle, list);
  
    list.append(
      getProductCard("Товар1", 1200),
      getProductCard("Товар2", 768),
      getProductCard("Товар3", 544)
    );
  
    return page;
  }