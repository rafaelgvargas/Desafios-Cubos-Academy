function solucao(precosCarrinho: number[], minimoParaDesconto: number, desconto: number): number {
    let valorDaCompra = 0
    for (let i = 0; i < precosCarrinho.length; i++){
        valorDaCompra += precosCarrinho[i]
    }    
    if (valorDaCompra >= minimoParaDesconto) {
        return valorDaCompra - (valorDaCompra * desconto)
    }else {
        return valorDaCompra
    }
}
