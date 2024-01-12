import { router } from "/src/js/main.js";
import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
export function getOrderPage() {
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");
  
    const mainTitle = getMainTitle("Оформление");
  
    const descr = getProductDescr("Здесь оформление заказа");
    page.append(mainTitle, descr);
  
    return page;
  }
  