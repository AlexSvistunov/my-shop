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

router.on("/", async function () {
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-main.js");
  const mainPage = module.getMainPage();
  pageContainer.append(mainPage);
});

router.on("/catalog", async function () {
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-catalog.js");
  const catalogPage = module.getCatalogPage();
  pageContainer.append(catalogPage);
});

router.on("/order", async function ({}) {
  if (true) {
    router.navigate("/");
    return;
  }

  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-order.js");
  const orderPage = module.getOrderPage();
  pageContainer.append(orderPage);
});

router.on("/basket", async function () {
  pageContainer.innerHTML = "";
  const module = await import("./Pages/pages-basket.js");
  const basketPage = module.getBasketPage();
  pageContainer.append(basketPage);
});

router.on("/product/:title", async function ({ data }) {
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

router.resolve();


app.append(header, pageContainer);
