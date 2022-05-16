function comparaNumeros (num1, num2){

    const saoIguais = num1 === num2;
    
    if(saoIguais){
        return "são iguais";
    }
        return "não são iguais";
}

function somaNumeros (num1,num2){
    const soma = num1 + num2;

    if (soma >= 10) {
        console.log(`a soma de ${num1} e ${num2} é maior que 10`)
    }
    if (soma <= 20) {
        console.log(`a soma de ${num1} e ${num2} é menor que 20`)   
    }
}
console.log(comparaNumeros(1,2));
console.log(somaNumeros(1,2));