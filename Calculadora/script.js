function calculadora (){
    const opecarao = prompt("Escolha uma operação :\nAdição 1:\nSubtração 2: ");

    console.log("olá")


let n1 = prompt("insira o primeiro numero");
let n2 = prompt("insira o segundo numero");
let resultado;

function soma (){
    resultado = n1 + n2;
    alert(`${n1}+${n2}=${resultado}`);
    
}

if (opecarao == 1) {
    soma();
}else if (opecarao == 2) {
    subtracao();
}
}

calculadora();
