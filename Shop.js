const passar = document.querySelectorAll(".passar");
const dots = document.querySelectorAll(".dot");

let atual = 0;

function trocarSlide() {

    passar[atual].classList.remove("ativo");
    dots[atual].classList.remove("ativo-dot");

    atual++;

    if(atual >= passar.length){
        atual = 0;
    }

    passar[atual].classList.add("ativo");
    dots[atual].classList.add("ativo-dot");
}

setInterval(trocarSlide, 5000);

let count = 0;

let carrinho = [];

function addCarrinho(nome, preco){
    carrinho.push({ nome, preco });

    atualizarCarrinho();
    atualizarContador();
    atualizarTotal(); 

    document.getElementById("carrinho").classList.add("ativo");
}

function atualizarCarrinho(){
    const lista = document.getElementById("lista-carrinho");

    lista.innerHTML = "";

    carrinho.forEach((item, index) => {
        lista.innerHTML += `
            <div class="item">
                <div>
                    <strong>${item.nome}</strong><br>
                    R$ ${item.preco}
                </div>

                <button onclick="removerItem(${index})">X</button>
            </div>
        `;
    });
}

function removerItem(index){
    carrinho.splice(index, 1);

    atualizarCarrinho();
    atualizarContador();
    atualizarTotal();
}

function atualizarContador(){
    document.getElementById("cart-count").innerText = carrinho.length;
}

function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("ativo");
}

function abrirCarrinho(){
    document.getElementById("carrinho").classList.add("ativo");
}




function atualizarTotal(){
    let total = 0;

    carrinho.forEach(item => {
        total += Number(item.preco);
    });

    document.getElementById("total-carrinho").innerText = total.toFixed(2);
}

function comprar(){
    if(carrinho.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra realizada com sucesso! 🛒");

    carrinho = [];
    atualizarCarrinho();
    atualizarContador();
    atualizarTotal();
}

