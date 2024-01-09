import { getHeader } from "./Components/header";
const app = document.getElementById("app");

function getPageContainer() {
  const main = document.createElement("main");
  main.classList.add("main");

  return main;
}

function getMainPage() {
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

function getProductPage() {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  const mainTitle = getMainTitle("Продукт");

  const descr = getProductDescr("Страница в разработке");
  page.append(mainTitle, descr);

  return page;
}

function getCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  const mainTitle = getMainTitle("Каталог");

  const descr = getProductDescr("Страница в разработке");
  page.append(mainTitle, descr);

  return page;
}

function getBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page", "container");

  const mainTitle = getMainTitle("Корзина");

  const descr = getProductDescr("Страница в разработке");
  page.append(mainTitle, descr);

  return page;
}

function getMainTitle(text) {
  const title = document.createElement("h1");
  title.classList.add("main-title");
  title.textContent = text;

  return title;
}

function getProductCard(title, price) {
  const item = document.createElement("li");
  item.classList.add("product-list__item");

  const ItemTitle = document.createElement("h3");
  ItemTitle.classList.add("product-list__title");
  ItemTitle.textContent = title;

  const itemPrice = document.createElement("strong");
  itemPrice.classList.add("product-list__price");
  itemPrice.textContent = `${price} руб`;

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn");
  addBasket.textContent = "Добавить в корзину";

  item.append(ItemTitle, itemPrice, addBasket);

  return item;
}

function getProductDescr(text) {
  const descr = document.createElement("p");
  descr.classList.add("descr");
  descr.textContent = text;

  return descr;
}

function navigation(page) {
  pageContainer.innerHTML = "";
  if (page === "catalog") {
    const catalogPage = getCatalogPage();
    pageContainer.append(catalogPage);
  } else if (page === "basket") {
    const basketPage = getBasketPage();
    pageContainer.append(basketPage);
  } else {
    page === "main";
    const mainPage = getMainPage();
    pageContainer.append(mainPage);
  }
}

const header = getHeader();
const pageContainer = getPageContainer();
navigation();
// const mainPage = getMainPage()
// pageContainer.append(mainPage)

// const productPage = getProductPage()
// pageContainer.append(productPage)

// const catalogPage = getCatalogPage()
// pageContainer.append(catalogPage)

// const basketPage = getBasketPage()
// pageContainer.append(basketPage)

app.append(header, pageContainer);
