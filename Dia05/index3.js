valor = 0
quantidade = 0

let opcao = parseInt(prompt('O que você deseja?:' + "\n1 = abastecer com gasolina; \n2 = abastecer com alcool; \n3 = calibrar pneu"))

switch (opcao){
    case 1 : 
        valor = parseInt(prompt("Digite o valor desejado para abastercer"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina.")
        break;
    case 2 : 
        valor = parseInt(prompt('Digite o valor desejado para abastecer"'))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + "L de álcool.")
    break;
    default:
        console.log('Os pneus foram calibrados com sucesso!') 

}