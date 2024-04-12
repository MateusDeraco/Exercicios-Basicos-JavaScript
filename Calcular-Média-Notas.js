//Calculadora de média de notas

//Menu interativo
let notaDigitada = parseFloat(prompt("Digite as notas dos alunos (Digite -1 para calcular as médias)"))

//Variáveis para efetuar os calculos
let totalNotas = 0
let quantidadeNotas = 0

//Guarda as notas digitadas e soma todas elas; Guarda quantas vezes as notas foram digitadas
while (notaDigitada !== -1) 
{
    totalNotas = totalNotas + notaDigitada
    quantidadeNotas += 1 

    notaDigitada = parseFloat(prompt("Digite as notas dos alunos (Digite -1 para calcular as médias)"))
}

//Calcula a média das notas
let resultado = totalNotas / quantidadeNotas

//Exibe o resultado
alert(`A média das notas é ${resultado}`)