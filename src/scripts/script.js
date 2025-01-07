const produtos = document.querySelectorAll(".card-produto");

produtos.forEach((produto) => {
  produto.addEventListener("click", () => {
    produto.classList.toggle("produto-selecionado");
  });
});

// Pega o modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function confirm() {
  console.log("confirm");
}
function negacao(){
  
}
