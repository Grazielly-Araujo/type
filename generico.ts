/* tipo generico de função */

function imprimir<t>(valor:t){
    console.log(valor);
}


imprimir<string>("Olá, World!");
imprimir<number>(9);






