let amigos = [];

function adicionarAmigo() {
    // Obter o valor do campo de entrada e remover espaços extras
    let input = document.getElementById("amigo");
    let inputName = input.value.trim(); // Remove espaços extras.
    // Verifica se o nome do amigo não está vazio.
    if (inputName) {
        amigos.push(inputName);
        atualizarListaAmigos(); // <- ATUALIZA a lista na tela.
    } else {
        alert("Nenhum amigo adicionado. Por favor, insira um nome!");
    }
    // Limpa o campo de entrada após adicionar o amigo.
    limparCampo();
}

// Limpa o campo de entrada.
function limparCampo() {
    document.getElementById("amigo").value = "";
}

// Atualiza a lista de amigos na tela.
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtém a lista de amigos.
    lista.innerHTML = ""; // Limpa a lista existente.
    amigos.forEach(function(amigo) { // Adiciona cada amigo à lista.
        let li = document.createElement("li"); // Cria um novo item de lista.
        li.textContent = amigo; // Define o texto do item de lista.
        lista.appendChild(li); // Adiciona o item de lista à lista de amigos.
    });
}

// Sortear um amigo secreto.
function sortearAmigo() {
    if (amigos.length < 2) { // Verifica se há pelo menos 2 amigos.
        alert("Adicione pelo menos 2 amigos para sortear.");
        return; // Impede o sorteio se não houver amigos suficientes.
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]; // Seleciona um amigo aleatoriamente.
    //Math.random() gera um número entre 0 (inclusive) e 1 (exclusivo).
    // Multiplicamos por amigos.length e fazemos Math.floor(...) para obter um índice inteiro válido.
    
    // mostrar o resultado dentro da UL resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSecreto}</strong></li>`;
}




