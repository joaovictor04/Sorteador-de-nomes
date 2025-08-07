let listaSorteados = [];
let numeroSorteado = [];

function exibirLista (nome){
    let novoItem = document.createElement("li");
    novoItem.textContent= `${nome} `;
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
    if (listaSorteados.length == numeroSorteado.length){
        alert("Todos nomes sorteados, adicione novamente outros nomes.");
        listaSorteados = [];
        numeroSorteado = [];
        document.getElementById("resultado").textContent = "";
        document.getElementById("listaDeNomes").innerHTML = "";
    }
    else {
        if(listaSorteados.length < 2){
            alert("Nenhum nome foi inserido para sortear. Adicione dois nomes antes.");
    }
        else{
            let resultado = listaSorteados[numSorteados()];
            document.getElementById("resultado").textContent = resultado;
    }
    }    
}

function numSorteados(){
    let verificarNumeroSorteado = (Math.floor(Math.random() * (listaSorteados.length)+1));
        while (numeroSorteado.includes(verificarNumeroSorteado)){
            verificarNumeroSorteado = (Math.floor(Math.random() * (listaSorteados.length)+1));
    }
    numeroSorteado.push(verificarNumeroSorteado);

    return verificarNumeroSorteado-1;
}