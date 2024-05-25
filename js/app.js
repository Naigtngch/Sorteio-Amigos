let amigos = [];

function adicionar() {
    let adicionarAmigo = document.getElementById('nome-amigo').value;
    if (adicionarAmigo == '') {
        alert ('Insira um nome!');
        return;
    }
    if (amigos.includes(adicionarAmigo)) {
        alert('Nome já adicionado');
        return;
    }
    let listaDeAmigos = document.getElementById('lista-amigos');
    amigos.push(adicionarAmigo);

    if (listaDeAmigos.innerHTML == '') {
        listaDeAmigos.innerHTML = adicionarAmigo;
    }   else {
        listaDeAmigos.innerHTML = listaDeAmigos.innerHTML + ', ' + adicionarAmigo;
    }
    document.getElementById('nome-amigo').value  = '';

}


function sortear () {
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    if (amigos.length < 4) {
        alert('Adicione no mínimo 4 pessoas para o sorteio!');
        return;
    }

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' ---> ' + amigos[0] + '<br>';
        }   else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' ---> ' + amigos[i + 1] + '<br>';
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}