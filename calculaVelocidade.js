verificaVelocidade(50);

function verificaVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima)
        console.log('OK');
    else {
        pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if(pontos >= 12)
            console.log('Carteira Suspendida!!!!')
        else
            console.log(pontos);
    }
}