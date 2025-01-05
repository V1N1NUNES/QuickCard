const produtos = document.querySelectorAll('.card-produto');

produtos.forEach(produto => {
    produto.addEventListener('click', () => {
      produto.classList.toggle('produto-selecionado');
    });
  });


// Pega o modal 
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn"); // Pega o elemento <span> que fecha o modal 
var span = document.getElementsByClassName("close")[0]; // Quando o usuário clica no botão, abre o modal 
btn.onclick = function() { modal.style.display = "block"; } // Quando o usuário clica no <span> (x), fecha o modal 
span.onclick = function() { modal.style.display = "none"; } // Quando o usuário clica fora do modal, fecha o modal 
window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none";
    }
}