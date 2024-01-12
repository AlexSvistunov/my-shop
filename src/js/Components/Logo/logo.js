import { router } from "/src/js/main.js";

export function getLogo() {
  const logo = document.createElement("a")
  logo.href = '/'
  logo.classList.add('logo', 'header__logo')
  logo.textContent = 'Логотип сайта'

  logo.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate('/')
  });

  return logo
}
