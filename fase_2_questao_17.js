// 17. Reescreva o seguinte código sem usar map, filter ou reduce, apenas laços e condicionais:
/* const arr = [10, 15, 22, 34, 45, 60];
const processado = arr.filter(n => n % 3 === 0).map(n => ({ original: n, metade: n / 2 
})).reduce((acc, obj) => acc + obj.metade, 0);
console.log(processado); */

const arr = [10, 15, 22, 34, 45, 60];
let arr2 = [];
let total = 0;
for (let num of arr) {
    if (num % 3 === 0) {
        arr2.push({ original: num, metade: num / 2 });
    }
}
for (let n of arr2) {
    total += n.metade;
}
console.log(total);
// saida: 60