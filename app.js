// Declaração de um array global para armazenar os nomes dos amigos
let amigos = [];

// Função para atualizar a lista de amigos exibida na página
function atualizarLista() {
    // Seleciona o elemento da lista (<ul>) pelo ID "listaAmigos"
    const listaAmigos = document.getElementById("listaAmigos");
    // Limpa a lista atual para evitar duplicação de itens
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e adiciona cada nome como um elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    // Seleciona o campo de entrada de texto pelo ID "amigo"
    const inputAmigo = document.getElementById("amigo");
    // Captura o valor inserido pelo usuário e remove espaços extras nas pontas
    const nome = inputAmigo.value.trim();

    // Validação: verifica se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Encerra a função se o nome não for válido
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada para nova inserção
    inputAmigo.value = "";

    // Atualiza a lista exibida na página com os novos nomes
    atualizarLista();

    // Opcional: Limpa o resultado anterior, caso já exista
    document.getElementById("resultado").innerHTML = "";
}

// Função para realizar o sorteio aleatório de um amigo
function sortearAmigo() {
    // Seleciona o elemento que exibirá o resultado do sorteio pelo ID "resultado"
    const resultado = document.getElementById("resultado");

    // Verifica se há pelo menos um nome na lista para sortear
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo foi adicionado para o sorteio.";
        return; // Encerra a função se a lista estiver vazia
    }

    // Gera um índice aleatório, garantindo que esteja entre 0 e o tamanho do array - 1
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    // Recupera o nome do amigo sorteado a partir do array
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio na página
    resultado.innerHTML = `O amigo secreto é: ${amigoSorteado}`;
}
