// 19. Explique como agrupar elementos de um array de objetos pela propriedade 'cidade' usando apenas métodos de array:
const pessoas = [ { nome: 'Ana', cidade: 'SP' }, { nome: 'Lucas', cidade: 'RJ' }, { nome: 'Bruna', 
cidade: 'SP' }, { nome: 'Caio', cidade: 'MG' } ];

let agrupamento = pessoas.reduce((resultado, pessoa) => {
    if (!resultado[pessoa.cidade]) {
        resultado[pessoa.cidade] = [];
    }
    resultado[pessoa.cidade].push(pessoa);
    return resultado;
}, {});