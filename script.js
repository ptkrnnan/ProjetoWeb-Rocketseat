function toggleMode() {
  //Mudando a classe html
  const html = document.documentElement
  html.classList.toggle('light')

  //Mudando o atributo src da tag img - profile
  const img = document.querySelector("#profile img")
  if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}