import { router } from "/src/js/main.js";
import './navigationLink.css'
export function getNavigationLink(path, text) {
    const link = document.createElement('a')
    link.href = path
    link.classList.add('navigation__link')
    link.setAttribute('data-nav', 'true')
    link.textContent = text
  
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      router.navigate(path)
    });
  
    return link
  }