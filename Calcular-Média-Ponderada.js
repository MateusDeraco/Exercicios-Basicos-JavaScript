//CALCULADORA DE MÉDIA PONDERADA

//Variáveis para armazenar os valores
let totalNumeros = []
let pesosNumeros = []

//Menu interativo
let opcoes = parseFloat(prompt(`
Escolha entre 1 e 2 para:
1- Adicionar números e seus respectivos pesos
2- Calcular a média ponderada`))

//Caso a escolha seja 1, então:
while(opcoes === 1)
{
    let numero = parseFloat(prompt("Digite o número"))
    let peso = parseFloat(prompt("Digite o peso do respectivo número"))

    totalNumeros.push(numero)
    pesosNumeros.push(peso)

    opcoes = parseFloat(prompt(`
Escolha entre 1 e 2 para:
1- Adicionar números e seus respectivos pesos
2- Calcular a média ponderada`))
}

//Caso a escolha seja 2, então:
if(opcoes === 2)
{
    let somaNumeros = 0
    let somaPesos = 0
for(let i = 0; i < totalNumeros.length ; i++)
    {
       somaNumeros += totalNumeros[i] * pesosNumeros[i]
       somaPesos += pesosNumeros[i]
    }

    const media = somaNumeros/somaPesos

    //Exibe o resultado do calculo da média ponderada
    alert(`A média ponderada dos números é igual a ${media}`)
}

if(opcoes !== 1 && opcoes !== 2) {alert("Termo inválido; reinicie a página")}