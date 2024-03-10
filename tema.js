//DOM - Document Object Model - Modelo de Objeto do Documento
// transforma tudo na página em objetos. Cada objeto recebe atributos (propriedades) e métodos (funções) associadas a ele.

//FUNÇÕES
// function nome da função(cparâmetros) {}
// corpo da função ( oque ela vai fazer com os parâmetros e o que ela vai retornar para quem a chamou);
//}

//saber o tema atual e obter o elemento do tema atual


//saber onde está o atributo de tema

// se o botão for clicado, então...
document.querySelector('#btTrocaTema').addEventListener('click', 
function trocaTema() {
    // pegar o elemento com o tema
    // se o tema for light, então mude o atributo para dark
    // se não for, então mude o atributo para light
    if (document.documentElement.getAttribute('data-tema') === 
    'light') {
        document.documentElement.setAttribute('data-tema', 'dark');
    } else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});


  
// trocar o tema:
// 1. pegar o elemento com o tema
// 2. apagar o atributo do tema atual
// 3. escrever o atributo do novo tema