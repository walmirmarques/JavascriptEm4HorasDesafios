exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let i = 2; i <= limite; i++){
        let ehPrimo = true;

        for(let divisor = 2; divisor < exibirNumerosPrimos; divisor++){
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) console.log(numero)
    }
}