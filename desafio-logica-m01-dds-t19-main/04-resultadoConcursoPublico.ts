function solucao(aprovados: string[], numeroInscricao: string): string {
    
    for (let inscricao of aprovados) {
        if (inscricao === numeroInscricao)
            return 'APROVADO'
    }
    return 'REPROVADO'
}
