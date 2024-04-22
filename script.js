function potencia (x,y){
    return Math.pow(x,y);
}

function adicao (x,y){
    return x + y;
}

function subtracao (x,y){
    return x - y;
}

function multiplicacao (x,y){
    return x * y;
}

function divisao (x,y){
    return x / y;
}

let continuar = true

while(continuar){

    const x = parseFloat(window.prompt("defina o primeiro número:"));
    const operacao = window.prompt("qual sera a operação matemarica?");
    const y = parseFloat(window.prompt("defina o segundo número:"));

    let resultado;

    if (operacao == "potencia" || operacao === "elevado" || operacao === "^"){
        window.alert(potencia(x,y));
    } else if (operacao === "adição" || operacao === "adiçao" || operacao === "mais" || operacao === "+"){
        window.alert(adicao(x,y));
    } else if (operacao === "subtração" || operacao === "subtraçao" || operacao === "menos" || operacao === "-"){
        window.alert(subtracao(x,y));
    }else if (operacao === "vezes" || operacao === "multiplicação" || operacao === "*" || operacao === "x"){
        window.alert(multiplicacao(x,y));
    } else if (operacao === "dividido" || operacao === "divisão" || operacao === "divisao" || operacao === "/"){
        window.alert(divisao(x,y));
    } else {
        window.alert("erro de calculo")
        continuar = window.confirm("deseja fazer outra operaçaõ?")
        continue;
    }

    continuar = window.confirm("deseja fazer outra operaçaõ?")

}