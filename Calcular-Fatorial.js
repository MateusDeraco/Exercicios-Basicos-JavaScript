//Calcula o fatorial de um número
let numero = parseFloat(prompt("Insira um número para calcular seu fatorial"))

//Calculando fatorial
let resultado = 1
for(let i = 1; i <= numero; i++) { resultado *= i }

//Exibindo fatorial
alert(`O fatorial de ${numero} é ${resultado}`)