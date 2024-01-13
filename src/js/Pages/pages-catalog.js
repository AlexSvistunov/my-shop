import { getMainTitle } from "/src/js/Components/MainTitle/mainTitle.js";
import { getProductList } from "../Components/ProductList/productList";
import { getProductListCard } from "../Components/ProductList/productListCard";
export async function getCatalogPage() {
    const page = document.createElement("div");
    page.classList.add("page", "catalog-page", "container");
  
    const mainTitle = getMainTitle("Каталог");
    
    const productList = getProductList().productList
    const products = await getProductList().getProducts()

    products.forEach(product => {
      console.log(product)
      const element = getProductListCard(product)
      
      productList.append(element)
    })


    page.append(mainTitle, productList);
  
    return page;
  }
  