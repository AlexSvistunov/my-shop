import { router } from "/src/js/main.js";
import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
export function get404Page() {
    const page = document.createElement("div");
    page.classList.add("page", "404-page", "container");
  
    const mainTitle = getMainTitle("404");
  
    const descr = getProductDescr("Страница не найдена");

    page.append(mainTitle, descr);


  
    return page;
  }