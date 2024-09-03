let var1 = Number(prompt("Escolha um número:"))
let var2 = Number(prompt("Escolha outro número"))
let operacao = (prompt("Qual operação deseja utilizar? " + "Soma, sub, mult ou div?"))
let soma = 0
let sub = 0
let mult = 0
let div = 0

switch (operacao){
    case "soma" :
        console.log(var1 + var2, "é o resultado da adição.")
        break;
    case "sub" :
        console.log(var1 - var2, "é o resultado da subtração.")
        break;
    case "mult" :
        console.log(var1 * var2, 'é o resultado da multiplicação.')
        break;
    case "div" :
        console.log(var1 / var2, 'é o resultado da divisão.')
        break;
    
    }  