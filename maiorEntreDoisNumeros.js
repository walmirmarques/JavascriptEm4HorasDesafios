function maiorNumero(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }
    return numero2;
}

let primeiraTentativa = maiorNumero(5, 10);
let segundaTentativa = maiorNumero(10, 5);
let terceiraTentativa = maiorNumero(5, 5);

console.log(primeiraTentativa);
console.log(segundaTentativa);
console.log(terceiraTentativa);

//forma simplificada

function Max(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}