const pessoa = {
    nome:'Walmir',
    idade: 29,
    altura: 196,
    peso: 140,
    calcado: 46
}

for(let key in pessoa){
    console.log(key);
}

const cores = ['Vermelho', 'Azul', 'Verde']

for(let indice in cores){
    console.log(cores[indice])
}

for(let cor of cores){
    console.log(cor);
}