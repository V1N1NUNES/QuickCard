const produtos = document.querySelectorAll(".card-produto");

//modal do botão de adicionar ao carrinho
produtos.forEach((produto) => {
  produto.addEventListener("click", () => {
    produto.classList.toggle("produto-selecionado");
  });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("addcart");
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

//modal do botão de editar produto
produtos.forEach((produto) => {
  produto.addEventListener("click", () => {
    produto.classList.toggle("produto-selecionado");
  });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("editproduct");
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


// criar um tipo abstrato de dados "Produtos"
class Produto {
  constructor(id, nome, preco, descricao) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }
}

//array de produtos no catálogo
var Lista_produtos = [];

//array de produtos no carrinho
var Carrinho = [];

// Exibir produtos
function Exibir_produto(id) {
  Lista_produtos.find((produto) => produto.id == id);
  if (!produto) {
    console.log("Produto não encontrado");
  } else {
    console.log(produto);
  }
}

//adicionar produto no catálogo
function AddProduto(id, nome, preco, descircao) {
  let produto = new Produto(id, nome, preco, descricao);
  Lista_produtos.push(produto);

  console.log(`Produto ${produto.nome} adicionado com sucesso!`);
}

//adicionar produtos no carrinho
function AddProdutoCarrinho(id){
  Carrinho.push(Lista_produtos.find((produto) => produto.id == id));
  console.log(`Produto ${produto.nome} adicionado ao carrinho!`);
}

//editar produto no catálogo
function Editar_produto(id){
  Lista_produtos.find((produto) => produto.id == id);
  if (!produto){
    console.log("Produto não encontrado");
  }
  else{     //como fazer a solicitação de novos dados?
    produto.nome = nome;
    produto.preco = preco;
    produto.descricao = descricao;
    console.log(`Produto ${produto.nome} editado com sucesso!`);
  }

  console.log(`Produto ${produto.nome} editado com sucesso!`);
}


//remover produto do catálogo
function Remover_produto(id){
  Lista_produtos.find((produto) => produto.id == id);
  if (!produto){
    console.log("Produto não encontrado");
  }
  else{
    Lista_produtos.splice(produto, 1);
    console.log(`Produto ${produto.nome} removido com sucesso!`);
  }
}

//edita os produtos do carrinho
function Editar_carrinho(){
  //produtos selecionados serem removidos do carrinho
}