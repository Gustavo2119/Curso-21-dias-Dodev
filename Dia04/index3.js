let name = prompt('Informe o seu nome:')
let idade = Number(prompt("informe sua idade:"))
let carta = prompt("Você possui habilitação?")
let carro = prompt("Você possui carro?")

if(idade < 18 || carta === "Não"){
    console.log(name +  ', você não pode dirigir.')
} else if(idade >= 18 && carta === "Sim" && carro === "Não"){
    console.log(name + ', você pode dirigir, mas não tem um carro.')
}else {
    console.log(name + ', você será o motorista!')
}