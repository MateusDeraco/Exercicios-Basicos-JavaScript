// Jogo de adivinhar um número de 1 a 100

//Variável para criar um número de 1 a 100
const numero = Math.floor(Math.random() * 100) +1

//Variáveis para um sistema de tentativas
const tentativasTotais = 5
let tentativas = 0

//Interação com o usuário
let palpite = parseFloat(prompt("Escolha um número de 1 a 100; Você terá 5 chances par acertar"))

//Verificação se o palpite é valido
if (isNaN(palpite) || palpite < 1 || palpite > 100) 
{alert("Insira um número que seja entre 1 e 100")}
    
//Verificação se o palpite é igual ao número sorteado
for (tentativas = 1; tentativas < tentativasTotais; tentativas++)
{
    if (isNaN(palpite) || palpite < 1 || palpite > 100) 
    {alert("Insira um número que seja entre 1 e 100; reinicie a página") 
    continue;}

    if (palpite === numero) {alert("Você acertou !")}

    if(palpite < numero) 
    {
    alert(`${palpite} é menor que o número sorteado`) 
    } else {alert(`${palpite} é maior que o número sorteado`) }

    palpite = parseFloat(prompt(`Escolha um número de 1 a 100, você já utilizou ${tentativas} tentativas`))
}  

//Caso o usuário já tenha utilizado as 5 chances
alert("Suas chances acabaram; reinicia a página para tentar novamente")

