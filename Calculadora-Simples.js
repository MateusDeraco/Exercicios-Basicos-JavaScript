//Calcularoda simples: pede dois números, calcula e exibe o resultado das operações
let primeiroNumero = parseFloat(prompt("Escreva o primeiro número das operações"))
let segundoNumero = parseFloat(prompt("Escreva o segundo número das operações"))

alert(`
${primeiroNumero} + ${segundoNumero} = ${primeiroNumero + segundoNumero}
${primeiroNumero} - ${segundoNumero} = ${primeiroNumero - segundoNumero}
${primeiroNumero} x ${segundoNumero} = ${primeiroNumero * segundoNumero}
${primeiroNumero} / ${segundoNumero} = ${primeiroNumero / segundoNumero}`)