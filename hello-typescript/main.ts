var minhaVar = 'minha variavel';

function minhaFuncao(x,y){

    return x+y;
}


//ESC6 OU ES2015
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];


numeros.map(function(valor){
    return valor * 2;
});

numeros.map( valor =>  valor * 2); // ES 2015