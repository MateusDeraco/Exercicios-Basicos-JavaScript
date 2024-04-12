//Funções dobro, somar e subtrair que foram importadas de "funções-1.js"
import {dobro, somar, subtrair} from "./funcoes-1.js"

//Menu interativo 
let opcoes = parseFloat(prompt(`
Escolha entre 1, 2 ou 3:
1- Para calcular o dobro de um número
2- Para somar dois números
3- Para subitrair dois números
`))

//Caso a escolha seja 1 o número pedido será dobrado utilizando a função dobro
if(opcoes === 1) { let n = parseFloat(prompt("Escreva um número para calcular o dobro dele"))
dobro(n)}

//Caso a escolha seja 2 dois números serão pedidos e somados utilizando a função somar
if(opcoes === 2) {
    let x = parseFloat(prompt("Escreva o primeiro número para calcular a soma de dois números"))
    let y = parseFloat(prompt("Escreva o segundo número para calcular a soma de dois números"))
    somar(x, y)}

//Caso a escolha seja 3 dois números serão pedidos e subtraidos utilizando a função subtrair
if(opcoes === 3) {
    let x = parseFloat(prompt("Escreva o primeiro número para calcular a subtrair de dois números"))
    let y = parseFloat(prompt("Escreva o segundo número para calcular a subtrair de dois números"))
    subtrair(x, y)}