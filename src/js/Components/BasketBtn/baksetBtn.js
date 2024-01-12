import './basketBtn.css'
import basketSvg from 'bundle-text:/src/assets/img/basket.svg';
import { router } from "/src/js/main.js";

export function getBasketBtn() {
    const basketBtn = document.createElement('a')
    basketBtn.href = '/basket'
    basketBtn.setAttribute('data-nav', 'true')
    basketBtn.classList.add('basket-btn', 'navigation__link')
    basketBtn.innerHTML = basketSvg

    
    basketBtn.addEventListener("click", (e) => {
        e.preventDefault();
        router.navigate('/basket')
      });

    return basketBtn
}