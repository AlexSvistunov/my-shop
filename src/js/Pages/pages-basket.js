import { router } from "/src/js/main.js";
import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
export function getBasketPage(object = {}) {
    const page = document.createElement("div");
    page.classList.add("page", "basket-page", "container");
  
    const mainTitle = getMainTitle("Корзина");
  
    const descr = getProductDescr("Страница в разработке");
   

     const renderBasketObj = (object = {}) => {
        const product = document.createElement('div')
        product.classList.add('basket-product')
        const {title, image, desc} = object;

        const productTitle = document.createElement('h3')
        productTitle.textContent = title

        const productImage = document.createElement('img')
        productImage.src = image;

        const productDescr = document.createElement('p')
        product.textContent = desc

        page.append(product)
        product.append(productTitle, productImage, productDescr)

        return product
     }

    // const orderButton = document.createElement('a')
    // orderButton.classList.add('btn')
    // orderButton.textContent = 'Перейти в корзину'
    // orderButton.href = '/order'
    // orderButton.addEventListener('click', (e) => {
    //   e.preventDefault()
    //   router.navigate('/order')
    // })
    renderBasketObj()
    page.append(mainTitle, descr);

    return {
      page,
      renderBasketObj
    };
  }