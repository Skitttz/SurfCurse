const links = document.querySelectorAll(".header-menu a");

function ativarLink(item) {
  const url = location.href;
  const href = item.href;
  if (url.includes(href)) {
    item.classList.add("ativo");
    console.log(href);
  }
}

links.forEach(ativarLink);

//Ativar itens do orcamentos

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

// Perguntas

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventPerguntas);

// Galeria de imagens

const galeria = document.querySelectorAll(".prancha-imagens img");
const galeriaContainer = document.querySelector(".prancha-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 950px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animacao
if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.ClipboardJS) {
  new ClipboardJS(".introducao-conteudo p");
}
