import { getBasketPage } from "../../Pages/pages-basket";
import { router } from "/src/js/main.js";
export function getProductListCard(product) {
    const productListCard = document.createElement('li')

    const productCardLink = document.createElement('a')

    const productCardBtn = document.createElement('button')
    productCardBtn.classList.add('catalog-item__btn', 'btn')
    productCardBtn.textContent = 'Добавить в корзину'
    
    productCardLink.classList.add('catalog-item__link')
    const productTitle = (product.title).split('').filter((el) => el !== ' ').join('');
    productCardLink.href = `/product/${productTitle}`
    productCardLink.addEventListener('click', (e) => {
      e.preventDefault()
      router.navigate(`/product/${productTitle}`)
    })

    productCardBtn.addEventListener('click', () => {
      getBasketPage().renderBasketObj(product)
    })
    productListCard.classList.add('catalog-list__item', 'catalog-item')
    productListCard.innerHTML = `
        <h3 class="catalog-item__title">${product.title}</h3>
        <img class="catalog-item__img" src="${product.image}" />
        <span class="catalog-item__price">${product.price} руб</span>
      `
      productListCard.append(productCardLink, productCardBtn)

    return productListCard
}