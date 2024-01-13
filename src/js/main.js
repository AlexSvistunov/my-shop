let Navigo = require("navigo");
import { getHeader } from "/src/js/Components/Header/header.js";
import { getPageContainer } from "/src/js/Components/PageContainer/pageContainer.js";
import { getProductCard } from "/src/js/Components/ProductCard/productCard.js";
import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductDescr } from "/src/js/Components/Descr/descr.js";
import { getProductPage } from "/src/js/Pages/pages-product.js";

const app = document.getElementById("app");

const header = getHeader();
const pageContainer = getPageContainer();

export const router = new Navigo("/");

const routerMain = '/'
const routerCatalog = '/catalog'
const routerOrder = '/order'
const routerBasket = '/basket'
const localHost = window.location.origin

router.on(routerMain, async function () {
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-main.js");
  const mainPage = module.getMainPage();
  pageContainer.append(mainPage);

  const items = document.querySelectorAll(`[data-nav='true']`)
  items.forEach(item => {
    item.classList.remove('navigation--active')
    if(item.href.slice(localHost.length) === routerMain) {
      item.classList.add('navigation--active')
    }
  })

});

router.on(routerCatalog, async function () {
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-catalog.js");
  const catalogPage = await module.getCatalogPage();
  pageContainer.append(catalogPage);

  const items = document.querySelectorAll(`[data-nav='true']`)
  items.forEach(item => {
    item.classList.remove('navigation--active')
    if(item.href.slice(localHost.length) === routerCatalog) {
      item.classList.add('navigation--active')
    }
  })
});

router.on(routerOrder, async function ({}) {
  if (true) {
    router.navigate("/");
    return;
  }

  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-order.js");
  const orderPage = module.getOrderPage();
  pageContainer.append(orderPage);
});

router.on(routerBasket, async function () {
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-basket.js");
  const basketPage = module.getBasketPage();
  pageContainer.append(basketPage);

  const items = document.querySelectorAll(`[data-nav='true']`)
  items.forEach(item => {
    item.classList.remove('navigation--active')
    if(item.href.slice(localHost.length) === routerBasket) {
      item.classList.add('navigation--active')
    }
  })
});

// router.on("/product/:title", async function ({ data }) {
//   console.log(data)
//   pageContainer.innerHTML = "";
//   const module = await import("./Pages/pages-product.js");
//   const productPage = module.getProductPage(data.title);
//   pageContainer.append(productPage);
// });

router.on("/product/:title", async function ({ data }) {
  console.log(data)
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-product.js");
  const productPage = module.getProductPage(data.title);
  pageContainer.append(productPage);
});

router.notFound(async() => {
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-404.js");
  const notFoundPage = module.get404Page();
  pageContainer.append(notFoundPage);
});

// devide this code into functions, elements, components

router.resolve();



app.append(header, pageContainer);
