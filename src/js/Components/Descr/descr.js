import './descr.css'

export function getProductDescr(text) {
    const descr = document.createElement("p");
    descr.classList.add("descr");
    descr.textContent = text;
  
    return descr;
  }