exibirAsteriscos(5);

function exibirAsteriscos(linhas){
    let padrao = '';
    for(let linha=0; linha < linhas; linha++){
        padrao += '*';
        console.log(padrao)
    }

}

// outra maneira

for(let linha = 0; linha < linhas; linha++){
    let padrao = '';
    for(let i = 0; i < linha; i++){
        padrao += '*';
    }
}