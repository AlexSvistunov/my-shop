import { router } from "/src/js/main.js";
import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
export function getBasketPage() {
    const page = document.createElement("div");
    page.classList.add("page", "basket-page", "container");
  
    const mainTitle = getMainTitle("Корзина");
  
    const descr = getProductDescr("Страница в разработке");

    const orderButton = document.createElement('a')
    orderButton.classList.add('btn')
    orderButton.textContent = 'Перейти в корзину'
    orderButton.href = '/order'
    orderButton.addEventListener('click', (e) => {
      e.preventDefault()
      router.navigate('/order')
    })

    page.append(mainTitle, descr, orderButton);


  
    return page;
  }