//Calcula a tabuado do número pedido de 1 a 10
let numero = parseFloat(prompt("insira um número"))

//Calculando
for(let i = 0; i <= 10; i++) 
{
    alert(`${numero} x ${i} = ${numero*i}`)
}