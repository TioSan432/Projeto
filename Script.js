/*javascrip*/
function toggleMode() {
  /*mudar botão para light e dark*/
  const html = document.documentElement
  html.classList.toggle("light") /*resumo de tudo a cima*/
  /*substituir imagem*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-claro.png") /*variante foto light mode*/
  } else {
    img.setAttribute("src", "./assets/avatar.png") /*variante foto dark mode*/
  }
}
