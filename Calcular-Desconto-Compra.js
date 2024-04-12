//Calcula o valor de desconto de uma compra
let valorDaCompra = parseFloat(prompt("Insira o valor da compra"))
let valorDoDesconto = parseFloat(prompt("insira o valor do desconto"))

//Calcula o desconto
let descontoAplicado = valorDaCompra * (valorDoDesconto/100)
let valorDaCompraComDesconto = valorDaCompra - descontoAplicado

//Exibe o preço após o desconto
alert(`
Valor da compra era R$${valorDaCompra};
Valor descontado foi de R$${descontoAplicado} 
Valor final da compra é de ${valorDaCompraComDesconto}`)