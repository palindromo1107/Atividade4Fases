// 18. O código abaixo modifica o array original. Explique o motivo e proponha duas formas de evitar essa mutação:
const lista = [4, 8, 12, 16];
const r = lista.splice(1, 2);
console.log(lista, r);