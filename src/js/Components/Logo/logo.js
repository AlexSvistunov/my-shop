export function getLogo() {
  const logo = document.createElement("a")
  logo.href = '#'
  logo.classList.add('logo', 'header__logo')
  logo.textContent = 'Логотип сайта'

  return logo
}
