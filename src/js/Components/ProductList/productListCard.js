export function getProductListCard(product) {
    const productListCard = document.createElement('li')
    const productCardLink = document.createElement('a')
    productCardLink.classList.add('catalog-item__link')
    const productTitle = (product.title).split('').filter((el) => el !== ' ').join('');
    productCardLink.href = `/product/${productTitle}`
    productListCard.classList.add('catalog-list__item', 'catalog-item')
    productListCard.innerHTML = `
        <h3 class="catalog-item__title">${product.title}</h3>
        <img class="catalog-item__img" src="${product.image}" />
        <span class="catalog-item__price">${product.price} руб</span>
      `
      productListCard.append(productCardLink)


    return productListCard
}