const filme = {
    titulo : 'Vingadores', 
    ano : 2018, 
    diretor : 'Walmir', 
    personagem : 'Homem de ferro'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for (prop in obj){
        if(typeof obj[prop] === 'string')
        console.log(prop, ': ', obj[prop])
    };
}