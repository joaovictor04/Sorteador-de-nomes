let listaSorteados = [];
let numeroSorteado = [];

function exibirLista (nome){
    let novoItem = document.createElement("li");
    novoItem.textContent= nome;
    let lista = document.getElementById("listaDeNomes");
    lista.appendChild(novoItem);
}

function verificarVazio (nome){
    if ((nome != "") & (nome != " ")){
        listaSorteados.push(nome);
        exibirLista (nome);
        document.getElementById("adicionarLista").value = "";
    }
    else{
        alert("Por favor, insira um nome");
    }
}

function addLista() {
    let nome = document.getElementById("adicionarLista").value;
    verificarVazio (nome);
}

function sortear (){
    if(listaSorteados.length < 2){
        alert("Nenhum nome foi inserido para sortear. Adicione dois nomes antes.")
    }
    else{
        let resultado = listaSorteados[numSorteados()-1];
        document.getElementById("resultado").textContent = resultado;
    }
    
}

function numSorteados(){
    let verificarNumeroSorteado = (Math.floor(Math.random() * (listaSorteados.length)+1));
    
    if (listaSorteados.length != numeroSorteado.length){
        while (numeroSorteado.includes(verificarNumeroSorteado)){
            console.log(`Número ${verificarNumeroSorteado} já existe. Gerando um novo...`);
            verificarNumeroSorteado = (Math.floor(Math.random() * (listaSorteados.length)+1));
        }
    }
    else {
        alert("Todos nomes sorteados, adicione novamente outros nomes.")
        listaSorteados.length = 0;
        numeroSorteado.length = 0;
        document.getElementById("resultado").textContent = "";
        document.getElementById("listaDeNomes").innerHTML = "";
    }
    numeroSorteado.push(verificarNumeroSorteado);

    return verificarNumeroSorteado;
}