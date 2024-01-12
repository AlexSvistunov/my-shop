import './pageContainer.css'
export function getPageContainer() {
    const main = document.createElement("main");
    main.classList.add("main");
  
    return main;
  }