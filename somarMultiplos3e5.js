somar(10);

function somar(limite){
    let total = 0;
    for(let i=0; i<= limite; i++){
        if (i % 3 === 0 || i % 5 === 0){
            total += i;
        }
    }
    console.log('O total da soma dos multiplos é: ', total)
}