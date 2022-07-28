const listaDeDevs = [
  {
    nome: "Rafael Bertoldo",
    stackDeEstudo: "back-end",
    imagem: "./assets/Bertoldo.jpg",
  },
  {
    nome: "Jardel Lacerda",
    stackDeEstudo: "front-end",
    imagem: "./assets/Jardel.jpg",
  },
  {
    nome: "Victor Augusto",
    stackDeEstudo: "fullstack",
    imagem: "./assets/Victor.jpg",
  },
  {
    nome: "Nicole Pimenta",
    stackDeEstudo: "front-end",
    imagem: "./assets/Nicole.jpg",
  },
  {
    nome: "Maria Ferrari",
    stackDeEstudo: "front-end",
    imagem: "./assets/Mia.jpg",
  },
  {
    nome: "Sidny",
    stackDeEstudo: "back-end",
    imagem: "./assets/Sid.jpg",
  },
];

const section = document.querySelector("#devs_list")
const footer = document.querySelector("#main_footer")

function renderizaCards (array){
  
for (let i = 0; i < array.length; i++){
  let div = document.createElement("div")
  div.classList.add("div")
  section.appendChild(div)
  let title = document.createElement("h2")
  title.classList.add("h2")
 title.innerText = `${array.nome}`
 let image =  document.createElement("img")
 image.classList.add("img")
 image.src = array.imagem
}

}
renderizaCards(listaDeDevs)