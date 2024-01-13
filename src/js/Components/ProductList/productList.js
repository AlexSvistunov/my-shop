import './productList.css';

export function getProductList() {
  const productList = document.createElement('ul')
  productList.classList.add('catalog-list', 'list-reset')

  const getProducts = async function () {
    const response = await fetch('https://shop-frontent.ru/wp-json/wp/v1/products')
    const data = await response.json();

    return data

  }


  return {
    productList,
    getProducts
  }
}
