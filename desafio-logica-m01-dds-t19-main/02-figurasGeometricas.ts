function solucao(quantidadeLados: number): string {
    if (quantidadeLados === 3) {
        return 'TRIANGULO'
    } else if (quantidadeLados === 4){
        return 'QUADRILATERO'
    } else if (quantidadeLados === 5) {
        return 'PENTAGONO'
    } else if (quantidadeLados === 6) {
        return 'HEXAGONO'
    } else {
        return 'HEPTAGONO'
    }
        
}
