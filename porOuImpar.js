exibirTipo(5);

function exibirTipo(limite){
    let contador = 0;
    while(contador < limite){
        if(contador % 2 === 0){
            console.log(contador , " PAR")
            contador ++;
        }
        console.log(contador, 'IMPAR')
        contador++;
    }
}