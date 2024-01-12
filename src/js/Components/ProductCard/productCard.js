import { router } from "/src/js/main.js";
import './productCard.css'
export function getProductCard(title, price) {
    const item = document.createElement("li");
    item.classList.add("product-list__item");

    const itemLink = document.createElement('a')
    itemLink.classList.add('product-list__link')
    itemLink.href = `/product${title}`
    itemLink.addEventListener('click', (e) => {
      e.preventDefault()
      router.navigate(`/product/${title}`)
    })

    const ItemTitle = document.createElement("h3");
    ItemTitle.classList.add("product-list__title");
    ItemTitle.textContent = title;
  
    const itemPrice = document.createElement("strong");
    itemPrice.classList.add("product-list__price");
    itemPrice.textContent = `${price} руб`;
  
    const addBasket = document.createElement("button");
    addBasket.classList.add("btn");
    addBasket.textContent = "Добавить в корзину";


    item.append(itemLink, ItemTitle, itemPrice, addBasket);
  
    return item;
  }
  