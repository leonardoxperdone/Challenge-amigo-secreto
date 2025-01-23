let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    if (input.value === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(input.value);
        input.value = "";
        lista_Amigos();  // Atualize a lista de amigos assim que adicionar um novo amigo
    }
}

function lista_Amigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    }
}
